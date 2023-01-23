import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class BingService {
  async find(idx = '0', n = '8') {
    try {
      const url = new URL('/HPImageArchive.aspx', 'https://cn.bing.com');
      url.searchParams.set('format', 'js');
      url.searchParams.set('idx', idx);
      url.searchParams.set('n', n);
      const res = await fetch(url);
      if (res.ok) {
        const { images } = await res.json();
        return images.map((item) => `https://cn.bing.com${item.url}`);
      }
      throw new Error('上游异常');
    } catch (err) {
      const mes = typeof err === 'string' ? err : err.message;
      throw new HttpException(mes, 500);
    }
  }
}
