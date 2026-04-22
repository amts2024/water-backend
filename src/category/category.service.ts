import { Injectable, OnModuleInit, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './schemas/category.schema';
import { CreateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService implements OnModuleInit {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const createdCategory = new this.categoryModel(createCategoryDto);
      return await createdCategory.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException(`Category with slug "${createCategoryDto.slug}" already exists`);
      }
      throw new InternalServerErrorException('Error creating category');
    }
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findOne(slug: string): Promise<Category | null> {
    return this.categoryModel.findOne({ slug }).exec();
  }

  async seed() {
    const categoriesCount = await this.categoryModel.countDocuments();
    if (categoriesCount > 0) return;

    const initialCategories = [
      {
        slug: 'ro-plant',
        title: 'RO Plants',
        iconName: 'Droplets',
        image: '/product/p3.jpeg',
        description: 'Industrial & Domestic Reverse Osmosis systems for pure water production.',
        count: '8+ Models',
      },
      {
        slug: 'automatic-filling-machine',
        title: 'Filling Machines',
        iconName: 'Zap',
        image: '/product/p12.jpeg',
        description: 'High-speed automatic washing, filling, and capping monoblocks.',
        count: '18-200 BPM',
      },
      {
        slug: 'blowing-machine',
        title: 'Blowing Machines',
        iconName: 'Factory',
        image: '/product/p13.jpeg',
        description: 'PET bottle blowing solutions from semi-auto to fully automatic rotary systems.',
        count: '2-6 Cavity',
      },
      {
        slug: 'shrink-machine',
        title: 'Shrink Mapping',
        iconName: 'Box',
        image: '/product/image copy 9.png',
        description: 'Secure secondary packaging with single or multi-track shrink wrapping.',
        count: 'Servo Base',
      },
      {
        slug: 'labelling-machine',
        title: 'Labelling Machines',
        iconName: 'ClipboardList',
        image: '/product/image copy 11.png',
        description: 'Precision labelling for round, square, and flat bottles with servo tech.',
        count: 'High Precision',
      },
      {
        slug: 'water-softener',
        title: 'Water Softeners',
        iconName: 'Droplets',
        image: '/product/p6.jpeg',
        description: 'Ion exchange systems for hardness removal in industrial applications.',
        count: 'Automatic',
      },
      {
        slug: 'dm-plant',
        title: 'DM Plants',
        iconName: 'Droplets',
        image: '/product/p8.jpeg',
        description: 'Demineralization plants for ultra-pure water in specialized industries.',
        count: 'Ultra Pure',
      },
      {
        slug: 'etp-plant',
        title: 'ETP Plants',
        iconName: 'Settings',
        image: '/product/p16.jpeg',
        description: 'Comprehensive effluent treatment solutions for environmental compliance.',
        count: 'Custom Built',
      },
    ];

    await this.categoryModel.insertMany(initialCategories);
    console.log('Categories seeded successfully');
  }
}
