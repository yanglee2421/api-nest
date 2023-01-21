import { IsString, ValidateIf } from 'class-validator';
export class SavePwd {
  @ValidateIf((pwd) => Boolean(pwd.id))
  @IsString()
  id: string;
  @IsString()
  site: string;
  @IsString()
  user: string;
  @IsString()
  pwd: string;
}
export class DeletePwd {
  @IsString()
  id: string;
}
