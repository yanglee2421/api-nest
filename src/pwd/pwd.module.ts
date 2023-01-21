import { Module } from '@nestjs/common';
import { PwdController } from './pwd.controller';
import { PwdService } from './pwd.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pwd } from '@/entities';
@Module({
  imports: [TypeOrmModule.forFeature([Pwd])],
  controllers: [PwdController],
  providers: [PwdService],
})
export class PwdModule {}
