import { IsString, IsUUID } from 'class-validator';

export class createDto {
  @IsString()
  joke: string;
}

export class UpdateDto extends createDto {
  @IsUUID()
  id: string;
}
