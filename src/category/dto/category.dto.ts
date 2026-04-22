export class CreateCategoryDto {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly iconName: string;
  readonly image: string;
  readonly count: string;
}

export class UpdateCategoryDto {
  readonly slug?: string;
  readonly title?: string;
  readonly description?: string;
  readonly iconName?: string;
  readonly image?: string;
  readonly count?: string;
}
