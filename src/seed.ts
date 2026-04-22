import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductService } from './product/product.service';
import * as fs from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const productService = app.get(ProductService);

  const jsonPath = path.join(__dirname, '..', '..', '.gemini', 'antigravity', 'brain', 'b1ddc4b4-bb6f-4784-97dd-6a583c8a9e08', 'scratch', 'products.json');
  console.log('Reading data from:', jsonPath);
  
  try {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    console.log('Seeding products...');
    const results = await productService.seed(data);
    console.log('Results:', results);
  } catch (error) {
    console.error('Error during seeding:', error);
  }

  await app.close();
}

bootstrap();
