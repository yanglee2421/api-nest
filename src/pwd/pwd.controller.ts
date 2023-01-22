import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
} from '@nestjs/common';
import { PwdService } from './pwd.service';
import { Cbody, Dbody, Ubody } from './dto';
@Controller('pwd')
export class PwdController {
  constructor(private readonly PwdService: PwdService) {}
  @Get()
  find() {
    return this.PwdService.find();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.PwdService.findOne(id);
  }
  @Put()
  create(@Body() Cbody: Cbody) {
    return this.PwdService.put(Cbody);
  }
  @Patch()
  patch(@Body() Ubody: Ubody) {
    return this.PwdService.patch(Ubody);
  }
  @Delete()
  remove(@Body() Dbody: Dbody) {
    return this.PwdService.remove(Dbody);
  }
}
