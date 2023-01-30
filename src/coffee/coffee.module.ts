import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from '@/entities/entity-flavor';
import { Coffee } from '@/entities/entity-coffee';

@Module({
  imports: [TypeOrmModule.forFeature([Flavor, Coffee])],
  providers: [CoffeeService],
  controllers: [CoffeeController],
})
export class CoffeeModule {}
