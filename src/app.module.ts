import { Module } from '@nestjs/common';
import { resolve } from 'node:path';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JokeModule } from './joke/joke.module';
import { PwdModule } from './pwd/pwd.module';
import { BingModule } from './bing/bing.module';
@Module({
  imports: [
    JokeModule,
    PwdModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: resolve(__dirname, '../../db.sqlite3'),
      synchronize: true,
      autoLoadEntities: true,
    }),
    BingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
