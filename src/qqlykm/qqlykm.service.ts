import { Injectable, HttpException } from '@nestjs/common';
import { Joke } from './entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';

namespace t {
  export interface data {
    success: boolean;
    data: { joke: string };
    text: {
      msg: string;
      copyright: string;
      time: string;
    };
  }
}

@Injectable()
export class QqlykmService {
  constructor(
    @InjectRepository(Joke)
    private readonly JokeRepository: Repository<Joke>,
    private readonly DataSource: DataSource,
  ) {}

  async joke() {
    try {
      const data = await request<t.data>({ url: '/api/joke' });
      const {
        success,
        data: { joke },
      } = data;

      const queryRunner = this.DataSource.createQueryRunner();

      if (success) {
        return await this.JokeRepository.save(
          this.JokeRepository.create({ joke }),
        );
      }
      throw new Error('上游出错');
    } catch (err) {
      throw new HttpException(err, 502, {
        cause: new Error(err.message),
        description: '上游出错',
      });
    }
  }
}

interface config extends RequestInit {
  url: string;
  body?: any;
  query?: Record<string, string>;
}
async function request<T = any>(config: config) {
  const { url: u, body: rbody, query, ...restConfig } = config;
  const baseUrl = 'https://qqlykm.cn';
  const key = 'GY7rE1J3f4ovi4wGONXshLHOHv';
  const url = new URL(u, baseUrl);
  Object.entries(query || {}).forEach(([key, value]) =>
    url.searchParams.append(key, value),
  );
  url.searchParams.set('key', key);
  const body =
    (config.method || '').toLowerCase() !== 'get'
      ? undefined
      : JSON.stringify(rbody);
  const res = await fetch(url, { ...restConfig, body });
  if (res.ok) return res.json() as unknown as T;
  throw new Error(res.statusText);
}
