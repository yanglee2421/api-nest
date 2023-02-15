import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Response,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response as resType } from 'express';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /* @Get()
  getHello(@Response() res: resType) {
    return res.sendFile(resolve(__dirname, '../../view/index.html'));
  } */

  @Get('/vite-react/*')
  webReact(@Response() res: resType) {
    res.sendFile(resolve(__dirname, '../view/react-app/index.html'));
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  file(@UploadedFile() file: Express.Multer.File) {
    return this.appService.file(file);
  }
}
