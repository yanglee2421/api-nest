import { Controller, Get, HttpException } from '@nestjs/common';
import { QqlykmService } from './qqlykm.service';

@Controller('qqlykm')
export class QqlykmController {
  constructor(private readonly QqlykmService: QqlykmService) {}

  @Get()
  joke() {
    return this.QqlykmService.joke();
  }
}
