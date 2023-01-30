import { IsInt, IsOptional, IsString, IsUUID, Length } from 'class-validator';

class Content {
  @IsString()
  @Length(1, 1000)
  readonly context: string;
}

export class Cbody extends Content {
  @IsOptional()
  @IsUUID()
  readonly id: string;
}

export class Rbody extends Content {
  @IsOptional()
  @IsInt()
  page: number;

  @IsOptional()
  @IsInt()
  size: number;
}

export class Dbody {
  @IsUUID()
  readonly id: string;
}
