import { Injectable } from '@nestjs/common';

@Injectable()
export class HeroManagementService {
  getHello(): string {
    return 'Hello World!';
  }
}
