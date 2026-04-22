import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService implements OnModuleInit {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async onModuleInit() {
    await this.autoSeed();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll() {
    return this.productModel.find().exec();
  }

  async findOne(id: string) {
    return this.productModel.findById(id).exec();
  }

  async findOneBySlug(slug: string) {
    return this.productModel.findOne({ slug }).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id).exec();
  }

  async autoSeed() {
    const count = await this.productModel.countDocuments();
    if (count > 0) return;

    const initialProducts = {
      "ro-plant": {
        title: "Reverse Osmosis (RO) Plant",
        description: "Advancelife Aqua Pvt. Ltd. manufactures state-of-the-art Reverse Osmosis Plants ranging from 500 LPH to 20,000 LPH. Our RO systems are engineered to deliver consistently pure water.",
        sliderImages: ["/product/p3.jpeg", "/product/p4.jpeg", "/product/p5.jpeg", "/product/image.png"],
        images: ["/product/p3.jpeg", "/product/p4.jpeg", "/product/p5.jpeg"],
        points: ["Capacities: 500-20,000 LPH", "Automation: Fully/Semi Automatic", "Origin: India"],
        keyFeatures: ["High-grade SS316/FRP vessels", "Automatic flush", "TDS controller", "Energy efficient pumps"],
        Customization: "Fully customizable for capacity and inlet water quality."
      },
      "water-softener": {
        title: "Water Softener Plant",
        description: "Ion exchange technology to remove calcium and magnesium hardness from water.",
        sliderImages: ["/product/p6.jpeg", "/product/p7.jpeg", "/product/image copy 3.png"],
        images: ["/product/p6.jpeg", "/product/p7.jpeg"],
        points: ["Capacity: 500-50,000 LPH", "Resin: Food Grade Available"],
        keyFeatures: ["High-capacity resin", "Auto regeneration", "FRP/MS vessels"],
        Customization: "Customized based on inlet hardness and flow rate."
      },
      "dm-plant": {
        title: "DM (Demineralized) Water Plant",
        description: "Produces ultra-pure demineralized water using ion exchange technology.",
        sliderImages: ["/product/p8.jpeg", "/product/p9.jpeg", "/product/image copy 5.png"],
        images: ["/product/p8.jpeg", "/product/p9.jpeg"],
        points: ["Capacity: 100-20,000 LPH", "Conductivity: < 0.1 µS/cm"],
        keyFeatures: ["Two-bed or mixed-bed", "Online monitoring", "HCl/NaOH regeneration"],
        Customization: "Configurable for specific conductivity and silica targets."
      },
      "uv-system": {
        title: "UV Water Sterilization System",
        description: "Germicidal ultraviolet light (254 nm) to inactivate microorganisms.",
        sliderImages: ["/product/p10.jpeg", "/product/p11.jpeg", "/product/image copy 7.png"],
        images: ["/product/p10.jpeg", "/product/p11.jpeg"],
        points: ["Capacity: 100-50,000 LPH", "Lamp Life: 9,000+ hours"],
        keyFeatures: ["254 nm germicidal UV-C", "SS304/316 reactor", "No chemicals"],
        Customization: "Integrated or standalone options."
      },
      "automatic-filling-machine": {
        title: "Automatic Bottle Filling Machine",
        description: "Fully automatic bottle washing, filling, and capping (3-in-1) machine.",
        sliderImages: ["/product/image copy 2.png", "/product/p13.jpeg", "/product/image copy 9.png"],
        images: ["/product/p12.jpeg", "/product/p13.jpeg"],
        points: ["Speed: 18-200 BPM", "Bottle Size: 200ml - 20L"],
        keyFeatures: ["Monoblock design", "SS304/316 parts", "PLC controlled"],
        Customization: "Configurable for still/carbonated beverages."
      },
      "ozonator": {
        title: "Ozonator / Ozone Generator",
        description: "Produces ozone for powerful disinfection without harmful residuals.",
        sliderImages: ["/product/p14 (2).jpeg", "/product/p15.jpeg", "/product/image copy 11.png"],
        images: ["/product/p14 (2).jpeg", "/product/p15.jpeg"],
        points: ["Output: 1-200 g/hr", "Feed Gas: Air/Oxygen"],
        keyFeatures: ["Corona discharge", "Integrated air dryer", "Timer based"],
        Customization: "Integrated with venturi or contact tanks."
      },
      "etp-plant": {
        title: "Effluent Treatment Plant (ETP)",
        description: "Industrial wastewater treatment complying with CPCB/SPCB norms.",
        sliderImages: ["/product/p16.jpeg", "/product/p17.jpeg", "/product/image copy 13.png"],
        images: ["/product/p16.jpeg", "/product/p17.jpeg"],
        points: ["Capacity: 1-500 KLD", "Norms: CPCB compliant"],
        keyFeatures: ["Primary/Secondary/Tertiary treatment", "PLC automation"],
        Customization: "Designed after detailed inlet analysis."
      },
      "blowing-machine": {
        title: "Blowing Machine",
        description: "High-performance PET bottle blowing machines.",
        sliderImages: ["/product/p13.jpeg", "/product/image copy 10.png"],
        images: ["/product/p13.jpeg", "/product/image copy 10.png"],
        points: ["2/4/6 Cavity", "Semi/Fully Automatic"],
        keyFeatures: ["Infrared heaters", "High pressure blowing", "PLC control"],
        Customization: "Based on bottle size and speed requirements."
      },
      "shrink-machine": {
        title: "Shrink Mapping / Wrapping Machine",
        description: "Secure and aesthetic secondary packaging for bottles.",
        sliderImages: ["/product/image copy 9.png", "/product/p15.jpeg"],
        images: ["/product/image copy 9.png", "/product/p15.jpeg"],
        points: ["Single/4 Track", "Servo Base options"],
        keyFeatures: ["Precise temp control", "High efficiency blower"],
        Customization: "Custom tracks and tunnel sizing."
      },
      "labelling-machine": {
        title: "Industrial Labelling Machine",
        description: "High-precision labelling for square, round, and flat bottles.",
        sliderImages: ["/product/image copy 11.png", "/product/p14 (2).jpeg"],
        images: ["/product/image copy 11.png", "/product/p14 (2).jpeg"],
        points: ["Square/Round/Double Star", "Servo Base"],
        keyFeatures: ["PLC/Servo control", "SS construction"],
        Customization: "Configurable for specific bottle shapes."
      }
    };

    for (const slug in initialProducts) {
      const product = initialProducts[slug];
      await new this.productModel({ ...product, slug,price: 1000 }).save();
    }
    console.log('Products seeded successfully.');
  }

  async seed(data: any) {
    const results: any[] = [];
    for (const slug in data) {
      const product = data[slug];
      const existing = await this.productModel.findOne({ slug }).exec();
      if (existing) {
        await this.productModel.findByIdAndUpdate(existing._id, product).exec();
        results.push({ slug, action: 'updated' });
      } else {
        const newProduct = new this.productModel({ ...product, slug });
        await newProduct.save();
        results.push({ slug, action: 'created' });
      }
    }
    return results;
  }
}
