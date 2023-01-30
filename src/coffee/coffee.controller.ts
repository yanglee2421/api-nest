import { Body, Controller, Get, Put } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { createDto, PaginationQueryDto } from './dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly CoffeeService: CoffeeService) {}
  @Get()
  find(@Body() body: PaginationQueryDto) {
    return this.CoffeeService.find(body);
  }
  @Put()
  put(@Body() body: createDto) {
    return this.CoffeeService.put(body);
  }
}
