import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PwdService } from './pwd.service';
import { SavePwd, DeletePwd } from './dto';
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
  @Post()
  save(@Body() SavePwd: SavePwd) {
    return this.PwdService.save(SavePwd);
  }
  @Delete()
  remove(@Body() DeletePwd: DeletePwd) {
    return this.PwdService.remove(DeletePwd);
  }
}
