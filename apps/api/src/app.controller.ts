import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHero() {
    console.info('API Controller');
    return this.appService.getOne(5);
  }
}
