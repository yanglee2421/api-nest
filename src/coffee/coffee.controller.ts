import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { createDto, PaginationQueryDto } from './dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly CoffeeService: CoffeeService) {}
  @Get()
  find(@Body() body: PaginationQueryDto) {
    return this.CoffeeService.find(body);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.CoffeeService.findOne(id);
  }

  @Put()
  put(@Body() body: createDto) {
    return this.CoffeeService.put(body);
  }
}
