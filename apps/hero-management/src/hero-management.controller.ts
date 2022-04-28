import { Controller, Get } from '@nestjs/common';
import { HeroManagementService } from './hero-management.service';

@Controller()
export class HeroManagementController {
  constructor(private readonly heroManagementService: HeroManagementService) {}

  @Get()
  getHello(): string {
    return this.heroManagementService.getHello();
  }
}
