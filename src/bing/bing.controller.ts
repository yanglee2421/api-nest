import { Controller, Get, Query } from '@nestjs/common';
import { BingService } from './bing.service';
@Controller('bing')
export class BingController {
  constructor(private readonly BingService: BingService) {}
  @Get()
  find(@Query() query) {
    console.log(query);
    const { idx = '1', n = '8' } = query;
    return this.BingService.find(idx, n);
  }
}
