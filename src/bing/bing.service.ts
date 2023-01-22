import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class BingService {
  async find(idx: string = '0', n: string = '8') {
    try {
      const url = new URL('/HPImageArchive.aspx', 'https://cn.bing.com');
      url.searchParams.set('format', 'js');
      url.searchParams.set('idx', idx);
      url.searchParams.set('n', n);
      const res = await fetch(url);
      const { images } = await res.json();
      return images.map((item) => `https://cn.bing.com${item.url}`);
    } catch (err) {
      const mes = typeof err === 'string' ? err : err.message;
      throw new HttpException(mes, 500);
    }
  }
}
