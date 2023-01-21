import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pwd } from '@/entities';
import { SavePwd, DeletePwd } from './dto';
@Injectable()
export class PwdService {
  constructor(@InjectRepository(Pwd) private readonly db: Repository<Pwd>) {}
  async find() {
    try {
      return this.db.find();
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
  async save(SavePwd: SavePwd) {
    const { id } = SavePwd;
    const target = id
      ? await this.db.preload(SavePwd)
      : this.db.create(SavePwd);
    return this.db.save(target);
  }
  async remove(DeletePwd: DeletePwd) {
    try {
      const { id } = DeletePwd;
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
