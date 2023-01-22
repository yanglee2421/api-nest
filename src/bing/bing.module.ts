import { Module } from '@nestjs/common';
import { BingController } from './bing.controller';
import { BingService } from './bing.service';
@Module({
  controllers: [BingController],
  providers: [BingService],
})
export class BingModule {}
