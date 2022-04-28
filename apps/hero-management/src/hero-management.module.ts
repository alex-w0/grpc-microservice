import { Module } from '@nestjs/common';
import { HeroManagementController } from './hero-management.controller';
import { HeroManagementService } from './hero-management.service';

@Module({
  imports: [],
  controllers: [HeroManagementController],
  providers: [HeroManagementService],
})
export class HeroManagementModule {}
