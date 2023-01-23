import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { JokeService } from './joke.service';
import { Cbody, Dbody } from './dto';
@Controller('joke')
export class JokeController {
  constructor(private readonly JokeService: JokeService) {}
  @Get()
  find() {
    return this.JokeService.find();
  }
  @Get('all')
  findAll() {
    return this.JokeService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.JokeService.findOne(id);
  }
  @Put()
  save(@Body() body: Cbody) {
    return this.JokeService.save(body);
  }
  @Delete()
  delete(@Body() body: Dbody) {
    const { id } = body;
    return this.JokeService.remove(id);
  }
}
