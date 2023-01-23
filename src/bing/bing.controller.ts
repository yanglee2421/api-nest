import { Controller, Get, Query } from '@nestjs/common';
import { BingService } from './bing.service';
import { Rquery } from './dto';
@Controller('bing')
export class BingController {
  constructor(private readonly BingService: BingService) {}
  @Get()
  find(@Query() query: Rquery) {
    const { idx, n } = query;
    return this.BingService.find(idx, n);
  }
}
