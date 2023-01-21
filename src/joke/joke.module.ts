import { Module } from '@nestjs/common';
import { JokeController } from './joke.controller';
import { JokeService } from './joke.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Joke } from '@/entities';
@Module({
  imports: [TypeOrmModule.forFeature([Joke])],
  controllers: [JokeController],
  providers: [JokeService],
})
export class JokeModule {}
