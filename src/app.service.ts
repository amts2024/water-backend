import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      status: "online",
      message: "Advance Life Aqua API - Pure Water, Better Life",
      port: 7002,
      database: "connected"
    };
  }
}
