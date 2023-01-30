import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Coffee } from '@/entities/entity-coffee';
import { Repository } from 'typeorm';
import { Flavor } from '@/entities/entity-flavor';
import { createDto, PaginationQueryDto } from './dto';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectRepository(Coffee) private readonly db: Repository<Coffee>,
    @InjectRepository(Flavor) private readonly Flavor: Repository<Flavor>,
  ) {}
  find(PaginationQueryDto: PaginationQueryDto) {
    return this.db.find({
      relations: ['flavors'],
      skip: PaginationQueryDto.offset,
      take: PaginationQueryDto.limit,
    });
  }
  async put(createDto: createDto) {
    try {
      createDto.flavors.map((name) => this.preloadFlavorByName(name));
      const flavors = await Promise.all([]);
      const item = this.db.create({ ...createDto, flavors });
      return await this.db.save(item);
    } catch (err) {
      throw new NotFoundException(err);
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
