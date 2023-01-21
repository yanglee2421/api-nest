import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JokeService } from './joke.service';
import { CreateJoke, DeleteJoke } from './dto';
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
  @Post()
  save(@Body() body: CreateJoke) {
    return this.JokeService.save(body);
  }
  @Delete()
  delete(@Body() body: DeleteJoke) {
    return this.JokeService.delete(body);
  }
}
