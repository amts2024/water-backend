import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEnquiryDto } from './dto/create-enquiry.dto';
import { UpdateEnquiryDto } from './dto/update-enquiry.dto';
import { Enquiry, EnquiryDocument } from './schemas/enquiry.schema';

@Injectable()
export class EnquiryService {
  constructor(
    @InjectModel(Enquiry.name) private enquiryModel: Model<EnquiryDocument>,
  ) {}

  async create(createEnquiryDto: CreateEnquiryDto): Promise<Enquiry> {
    const createdEnquiry = new this.enquiryModel(createEnquiryDto);
    return createdEnquiry.save();
  }

  findAll() {
    return this.enquiryModel.find().exec();
  }

  findOne(id: string) {
    return this.enquiryModel.findById(id).exec();
  }

  update(id: string, updateEnquiryDto: UpdateEnquiryDto) {
    return this.enquiryModel
      .findByIdAndUpdate(id, updateEnquiryDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.enquiryModel.findByIdAndDelete(id).exec();
  }
}
