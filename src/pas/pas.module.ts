import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PasController } from './pas.controller';
import { PasService } from './pas.service';
import { Pas } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Pas])],
  controllers: [PasController],
  providers: [PasService],
})
export class PasModule {}
