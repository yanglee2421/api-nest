import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  file(@UploadedFile() file: Express.Multer.File) {
    return this.appService.file(file);
  }
}
