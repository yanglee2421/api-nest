import { IsString, ValidateIf } from 'class-validator';
export class DeleteJoke {
  @IsString()
  readonly id: string;
}
export class CreateJoke {
  @ValidateIf((joke) => Boolean(joke.id))
  @IsString()
  readonly id: string;
  @IsString()
  readonly context: string;
}
