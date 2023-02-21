import { HttpException, Injectable } from '@nestjs/common';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

@Injectable()
export class AppService {
  getHello() {
    return 'api-nestjs is standing by';
  }
  async file(file: Express.Multer.File) {
    try {
      await writeFile(
        resolve(__dirname, '../public/' + file.originalname),
        file.buffer,
      );
      return '上传成功！';
    } catch (err) {
      const mes = typeof err === 'string' ? err : err.message;
      throw new HttpException(mes, 500);
    }
  }
}
