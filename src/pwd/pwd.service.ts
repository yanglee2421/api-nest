import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pwd } from '@/entities';
import { Cbody, Dbody, Ubody } from './dto';
@Injectable()
export class PwdService {
  constructor(@InjectRepository(Pwd) private readonly db: Repository<Pwd>) {}
  async find() {
    try {
      return this.db.find({
        where: [],
        skip: 0,
        take: 20,
        order: { site: 'asc', user: 'asc', pwd: 'asc' },
      });
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
