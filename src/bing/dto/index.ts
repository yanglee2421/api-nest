import { IsNumberString, ValidateIf } from 'class-validator';

export class Rquery {
  @ValidateIf((o) => Boolean(o.idx))
  @IsNumberString()
  readonly idx: string;
  @ValidateIf((o) => Boolean(o.n))
  @IsNumberString()
  readonly n: string;
}
