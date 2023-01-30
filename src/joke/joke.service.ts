import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Joke } from '@/entities';

@Injectable()
export class JokeService {
  constructor(@InjectRepository(Joke) private readonly db: Repository<Joke>) {}

  async find(num = '1') {
    try {
      const url = new URL('/api/joke/list', 'https://autumnfish.cn');
      url.searchParams.set('num', num);
      const headers = new Headers();
      const res = await fetch(url, { headers });
      if (res.ok) {
        const { data } = await res.json();
        const target = this.db.create({ context: data.at(0) });
        return await this.db.save([target]);
      }
      throw new Error('上游异常');
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  async findAll() {
    try {
      return await this.db.find();
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  async findOne(id: string) {
    try {
      return await this.db.findOneByOrFail({ id });
    } catch (err) {
      throw new NotFoundException(err);
    }
  }

  async save(body: Joke) {
    try {
      const target = this.db.create(body);
      return await this.db.save(target);
    } catch (err) {
      throw httpErr(err);
    }
  }

  async remove(id: string) {
    try {
      const target = await this.db.findOneByOrFail({ id });
      return await this.db.remove(target);
    } catch (err) {
      throw httpErr(err);
    }
  }
}

function httpErr(err: any) {
  const error = typeof err === 'string' ? err : err.message;
  return new HttpException(error, 500);
}
