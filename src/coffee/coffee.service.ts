import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '@/coffee/entities/entity-coffee';
import { DataSource, Repository } from 'typeorm';
import { Flavor } from './entities/entity-flavor';
import { createDto, PaginationQueryDto } from './dto';
import { Event } from './entities/entity-Event';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee)
    private readonly db: Repository<Coffee>,
    @InjectRepository(Flavor)
    private readonly Flavor: Repository<Flavor>,
    private readonly DataSource: DataSource,
  ) {}

  find(PaginationQueryDto: PaginationQueryDto) {
    return this.db.find({
      relations: ['flavors'],
      skip: PaginationQueryDto.offset,
      take: PaginationQueryDto.limit,
    });
  }

  async findOne(id: string) {
    try {
      const coffee = await this.db.findOneByOrFail({ id });
      await this.recommendCoffee(coffee);
      return coffee;
    } catch {
      throw new NotFoundException();
    }
  }

  async put(createDto: createDto) {
    try {
      const flavors = await Promise.all(
        createDto.flavors.map((name) => this.preloadFlavorByName(name)),
      );
      const item = this.db.create({ ...createDto, flavors });
      return await this.db.save(item);
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  async recommendCoffee(coffee: Coffee) {
    const queryRunner = this.DataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      coffee.recommendations++;

      const event = new Event();
      event.name = 'xxx';
      event.type = 'xxxT';
      event.payload = JSON.stringify({ id: coffee.id });

      await queryRunner.manager.save(coffee);
      await queryRunner.manager.save(event);

      await queryRunner.commitTransaction();
    } catch {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  async preloadFlavorByName(name: string) {
    try {
      return await this.Flavor.findOneByOrFail({ name });
    } catch {
      return this.Flavor.create({ name });
    }
  }
}
