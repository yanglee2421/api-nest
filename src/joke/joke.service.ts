import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from '@/entities';
import { CreateJoke, DeleteJoke } from './dto';
@Injectable()
export class JokeService {
  constructor(@InjectRepository(Joke) private readonly db: Repository<Joke>) {}
  async find(num = '1') {
    try {
      const url = new URL('/api/joke/list', 'https://autumnfish.cn');
      url.searchParams.set('num', num);
      const headers = new Headers();
      const res = await fetch(url, { headers });
      const { data } = await res.json();
      const target = this.db.create({ context: data.at(0) });
      return this.db.save([target]);
    } catch (err) {
      throw new NotFoundException(err, '上游出毛病了');
    }
  }
  async findAll() {
    try {
      return this.db.find();
    } catch (err) {
      throw new NotFoundException(err, '查不到');
    }
  }
  async findOne(id: string) {
    try {
      return this.db.findOneByOrFail({ id });
    } catch (err) {
      throw new NotFoundException(err, '查无此项');
    }
  }
  async save(body: CreateJoke) {
    try {
      const { id } = body;
      const target = id ? await this.db.preload(body) : this.db.create(body);
      return this.db.save(target);
    } catch (err) {
      throw httpErr(err);
    }
  }
  async delete(body: DeleteJoke) {
    try {
      const { id } = body;
      const target = await this.db.findOneByOrFail({ id });
      return this.db.remove(target);
    } catch (err) {
      throw httpErr(err);
    }
  }
}
function httpErr(err: any) {
  const error = typeof err === 'string' ? err : err.message;
  return new HttpException(error, 500);
}
