import { IsInt, IsString, IsUUID, Length, ValidateIf } from 'class-validator';
class Content {
  @IsString()
  @Length(1, 1000)
  readonly context: string;
}
export class Cbody extends Content {
  @ValidateIf((o) => Boolean(o.id))
  @IsUUID()
  readonly id: string;
}
export class Rbody extends Content {
  @ValidateIf((o) => Boolean(o.page))
  @IsInt()
  page: number;
  @ValidateIf((o) => Boolean(o.size))
  @IsInt()
  size: number;
}
export class Dbody {
  @IsUUID()
  readonly id: string;
}
