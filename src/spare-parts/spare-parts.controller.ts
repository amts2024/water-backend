import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { SparePartsService } from './spare-parts.service';

@Controller('spare-parts')
export class SparePartsController {
  constructor(private readonly sparePartsService: SparePartsService) {}

  @Get()
  async findAll() {
    return this.sparePartsService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return this.sparePartsService.findOne(slug);
  }

  @Post()
  async create(@Body() data: any) {
    return this.sparePartsService.create(data);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.sparePartsService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.sparePartsService.remove(id);
  }
}
