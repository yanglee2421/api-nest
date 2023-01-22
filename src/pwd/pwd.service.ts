import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { Pwd } from '@/entities';
import { Cbody, Dbody, Rbody, Ubody } from './dto';
@Injectable()
export class PwdService {
  constructor(@InjectRepository(Pwd) private readonly db: Repository<Pwd>) {}
  async find(Rbody: Rbody) {
    try {
      const { page = 1, size = 20, ...restBody } = Rbody;
      const item = {};
      Object.entries(restBody).forEach(([key, value]) => {
        item[key] = Like(`%${value}%`);
      });
      const isWhere = JSON.stringify(item) !== '{}';
      const findOption: FindManyOptions<Pwd> = {
        where: isWhere ? item : undefined,
        skip: (page - 1) * size,
        take: size,
        order: { site: 'asc' },
      };
      const total = await this.db.count(findOption);
      const rows = await this.db.find(findOption);
      return { total, rows };
    } catch (err) {
      throw new NotFoundException(err);
    }
  }
  async findOne(id: string) {
    try {
      return this.db.findOneByOrFail({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }
  async put(Cbody: Cbody) {
    try {
      const target = this.db.create(Cbody);
      return this.db.save(target);
    } catch (err) {
      throw httErr(err);
    }
  }
  async patch(Ubody: Ubody) {
    try {
      const target = await this.db.preload(Ubody);
      return this.db.save(target);
    } catch (err) {
      throw httErr(err);
    }
  }
  async remove(Dbody: Dbody) {
    try {
      const { id } = Dbody;
      const target = await this.db.findOneByOrFail({ id });
      return this.db.remove(target);
    } catch (err) {
      throw httErr(err);
    }
  }
}
function httErr(err: any) {
  const mes = typeof err === 'string' ? err : err.message;
  return new HttpException(mes, 500);
}
