import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QqlykmController } from './qqlykm.controller';
import { QqlykmService } from './qqlykm.service';
import { Joke } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Joke])],
  controllers: [QqlykmController],
  providers: [QqlykmService],
})
export class QqlykmModule {}
