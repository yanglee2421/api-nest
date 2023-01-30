import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from '@/coffee/entities/entity-flavor';
import { Coffee } from '@/coffee/entities/entity-coffee';
import { Event } from '@/coffee/entities/entity-Event';

@Module({
  imports: [TypeOrmModule.forFeature([Flavor, Coffee, Event])],
  providers: [CoffeeService],
  controllers: [CoffeeController],
})
export class CoffeeModule {}
