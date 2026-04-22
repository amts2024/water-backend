import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EnquiryModule } from './enquiry/enquiry.module';
import { ProductModule } from './product/product.module';
import { SparePartsModule } from './spare-parts/spare-parts.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
     useFactory: (configService: ConfigService) => {
  const uri = configService.get<string>('MONGO_URI');

  // 🔍 Debug ke liye
  console.log('Mongo URI:', uri);

  return {
    uri,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000,
  };
},
    }),
    UsersModule,
    EnquiryModule,
    ProductModule,
    SparePartsModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
