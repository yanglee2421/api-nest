import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { PwdService } from './pwd.service';
import { Cbody, Dbody, Rbody, Ubody } from './dto';
@Controller('pwd')
export class PwdController {
  constructor(private readonly PwdService: PwdService) {}
  @Post()
  find(@Body() Rbody: Rbody) {
    return this.PwdService.find(Rbody);
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
