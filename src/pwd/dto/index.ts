import { IsInt, IsString, IsUUID, Length, ValidateIf } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
class Content {
  @IsString()
  @Length(1, 100)
  readonly site: string;
  @IsString()
  @Length(1, 100)
  readonly user: string;
  @IsString()
  @Length(1, 100)
  readonly pwd: string;
}
export class Cbody extends Content {
  @ValidateIf((body) => Boolean(body.id))
  @IsUUID()
  readonly id: string;
}
export class Ubody extends PartialType(Content) {
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
export class Dbody {
  @IsUUID()
  readonly id: string;
}
