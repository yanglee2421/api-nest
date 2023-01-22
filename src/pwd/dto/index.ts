import {
  IsInt,
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
  readonly site: string;
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  readonly user: string;
  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  readonly pwd: string;
}
export class Cbody extends Content {
  @ValidateIf((body) => Boolean(body.id))
  @IsUUID()
  readonly id: string;
}
export class Rbody extends PartialType(Content) {
  @ValidateIf((body) => Boolean(body.page))
  @IsInt()
  readonly page: number;
  @ValidateIf((body) => Boolean(body.size))
  @IsInt()
  readonly size: number;
}
export class Ubody extends Rbody {
  @IsUUID()
  readonly id: string;
}
export class Dbody {
  @IsUUID()
  readonly id: string;
}
