import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateEnquiryDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsNotEmpty({ message: 'Mobile number is required' })
  @IsString()
  phone: string;

  @IsNotEmpty({ message: 'Message is required' })
  @IsString()
  @Length(5, 500, { message: 'Message should be at least 5 characters' })
  message: string;
}
