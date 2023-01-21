import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JokeModule } from './joke/joke.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'node:path';
@Module({
  imports: [
    JokeModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: resolve(__dirname, '../db.sqlite3'),
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
