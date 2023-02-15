import { Module } from '@nestjs/common';
import { resolve } from 'node:path';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeModule } from './coffee/coffee.module';
import { QqlykmModule } from './qqlykm/qqlykm.module';
import { PasModule } from './pas/pas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: resolve(__dirname, '../db.sqlite3'),
      synchronize: true,
      // nestjs提供
      autoLoadEntities: true,
    }),
    CoffeeModule,
    QqlykmModule,
    PasModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
