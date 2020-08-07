import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsEmail,
  Length,
} from 'class-validator';

export class RateDTO {
  @Length(2)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  rate: number;

  @IsNumber()
  @IsNotEmpty()
  res_id: number;
}
