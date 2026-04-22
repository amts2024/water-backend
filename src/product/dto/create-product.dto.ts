import {
  IsArray,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  slug: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  sliderImages: string[];

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsArray()
  @IsString({ each: true })
  points: string[];

  @IsArray()
  @IsString({ each: true })
  keyFeatures: string[];

  @IsNotEmpty()
  @IsString()
  Customization: string;
}
