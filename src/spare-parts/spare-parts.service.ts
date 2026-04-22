import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SparePartCategory, SparePartCategoryDocument } from './schemas/spare-part.schema';

@Injectable()
export class SparePartsService implements OnModuleInit {
  constructor(
    @InjectModel(SparePartCategory.name)
    private sparePartModel: Model<SparePartCategoryDocument>,
  ) {}

  async onModuleInit() {
    await this.seed();
  }

  async seed() {
    const count = await this.sparePartModel.countDocuments();
    if (count > 0) return;

    const initialData = [
      {
        slug: "filtration-media",
        category: "Filtration Media & Vessels",
        icon: "🔵",
        items: [
          { name: "Carbon, Sand & Media", desc: "Activated carbon, silica sand, and filter media for multi-grade filtration.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" },
          { name: "Cartridge Filters", desc: "PP spun, wound & pleated filters — 1 to 100 micron.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
          { name: "FRP Pressure Vessels", desc: "Fiber-reinforced pressure vessels for RO membranes, 2.5″–16″.", image: "https://images.unsplash.com/photo-1590432833075-802baaa47190?auto=format&fit=crop&q=80&w=400" },
          { name: "RO Membrane Housing", desc: "SS & FRP housings for all standard 4\" and 8\" membranes.", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        slug: "pumps-pressure",
        category: "Pumps & Pressure Components",
        icon: "⚙️",
        items: [
          { name: "High Pressure Pumps", desc: "Stainless steel multistage centrifugal pumps for RO systems.", image: "https://plus.unsplash.com/premium_photo-1661915909875-c54d77757912?auto=format&fit=crop&q=80&w=400" },
          { name: "Dosing Pumps", desc: "Chemical dosing pumps for anti-scalant, chlorine & pH correction.", image: "https://images.unsplash.com/photo-1527672829624-f3d1440aa612?auto=format&fit=crop&q=80&w=400" },
          { name: "Pressure Gauges", desc: "Glycerin-filled & dry pressure gauges — 0–300 PSI range.", image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&q=80&w=400" },
          { name: "Flow Meters", desc: "Rotameter & digital flow meters for precise flow measurement.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        slug: "electrical-control",
        category: "Electrical & Control Panels",
        icon: "⚡",
        items: [
          { name: "RO Electric & ATM Panel", desc: "Fully wired control panels with auto-flush, pressure cut-off & indicators.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400" },
          { name: "Solenoid Valves", desc: "Motorized ball valves and solenoid valves for automated water control.", image: "https://images.unsplash.com/photo-1516774612710-73dc9103c81e?auto=format&fit=crop&q=80&w=400" },
          { name: "Level Controllers", desc: "Float switches and electronic level controllers for tank management.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" },
          { name: "TDS / EC Controllers", desc: "Inline TDS meters and auto-controllers for water quality monitoring.", image: "https://images.unsplash.com/photo-1582719478230-18e472260647?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        slug: "chemicals-treatment",
        category: "Chemicals & Treatment",
        icon: "🧪",
        items: [
          { name: "Dosing Anti-Scale Chemicals", desc: "Liquid & powder anti-scalants to prevent membrane scaling.", image: "https://images.unsplash.com/photo-1532187875617-5a9ad814a9b7?auto=format&fit=crop&q=80&w=400" },
          { name: "All Chemicals", desc: "Membrane cleaning chemicals, biocides, pH adjusters & flocculants.", image: "https://images.unsplash.com/photo-1581093583449-8255a7d46e66?auto=format&fit=crop&q=80&w=400" },
          { name: "Ozonator", desc: "Ozone generators for disinfection of water and beverage lines.", image: "https://images.unsplash.com/photo-1584036561566-baf2f5f1714a?auto=format&fit=crop&q=80&w=400" },
          { name: "UV Sterilizer Lamps", desc: "25W–75W UV lamps and quartz sleeves for microbial disinfection.", image: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        slug: "membranes-filters",
        category: "Membranes & Filters",
        icon: "💧",
        items: [
          { name: "RO Membranes", desc: "All brands: Filmtec, Hydranautics, CSM — 75 GPD to 400 GPD & industrial.", image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&q=80&w=400" },
          { name: "PP Membrane Housing", desc: "Clear & blue PP filter housings for pre-treatment stages.", image: "https://images.unsplash.com/photo-1585832770481-4b5c6133100c?auto=format&fit=crop&q=80&w=400" },
          { name: "Electric Heaters", desc: "Immersion & circulation heaters for hot water systems.", image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=400" },
          { name: "Safety & Relief Valves", desc: "Pressure safety valves and check valves for system protection.", image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=400" },
        ],
      },
      {
        slug: "packaging-filling",
        category: "Packaging & Filling Spares",
        icon: "🏭",
        items: [
          { name: "Filling Machine Nozzles", desc: "Stainless nozzles for automatic bottle filling lines.", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=400" },
          { name: "Capping Machine Parts", desc: "Heads, chucks, and rollers for all types of cappers.", image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=400" },
          { name: "Bottle Washing Spares", desc: "Nozzles, jets and conveyor parts for automatic washers.", image: "https://images.unsplash.com/photo-1504917595217-d4dc5f6667b8?auto=format&fit=crop&q=80&w=400" },
          { name: "Conveyors & Belts", desc: "SS & PVC conveyor belts for filling, labelling & packing lines.", image: "https://images.unsplash.com/photo-1565891741441-649fc6024102?auto=format&fit=crop&q=80&w=400" },
        ],
      },
    ];

    for (const data of initialData) {
      await new this.sparePartModel(data).save();
    }
    console.log('Spare parts seeded successfully.');
  }

  async findAll() {
    return this.sparePartModel.find().exec();
  }

  async findOne(slug: string) {
    return this.sparePartModel.findOne({ slug }).exec();
  }

  async create(data: any) {
    if (!data.slug) {
      data.slug = data.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

    // Check for duplicate slug
    let finalSlug = data.slug;
    let counter = 1;
    while (await this.sparePartModel.findOne({ slug: finalSlug })) {
      finalSlug = `${data.slug}-${counter}`;
      counter++;
    }
    data.slug = finalSlug;

    const created = new this.sparePartModel(data);
    return created.save();
  }

  async update(id: string, data: any) {
    return this.sparePartModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string) {
    return this.sparePartModel.findByIdAndDelete(id).exec();
  }
}
