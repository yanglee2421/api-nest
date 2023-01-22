import {
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  ValidateIf,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
class Content {
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  site: string;
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  user: string;
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  pwd: string;
}
export class Cbody extends Content {
  @ValidateIf((body) => Boolean(body.id))
  @IsUUID()
  id: string;
}
export const Rbody = PartialType(Content);
export class Ubody extends Rbody {
  @IsUUID()
  id: string;
}
export class Dbody {
  @IsUUID()
  id: string;
}
