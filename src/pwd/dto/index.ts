import { IsInt, IsOptional, IsString, IsUUID, Length } from 'class-validator';
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
  @IsOptional()
  @IsUUID()
  readonly id: string;
}

export class Ubody extends PartialType(Content) {
  @IsUUID()
  readonly id: string;
}

export class Rbody extends PartialType(Content) {
  @IsOptional()
  @IsInt()
  readonly page: number;

  @IsOptional()
  @IsInt()
  readonly size: number;
}

export class Dbody {
  @IsUUID()
  readonly id: string;
}
