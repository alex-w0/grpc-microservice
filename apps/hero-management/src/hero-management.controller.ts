import { Controller } from '@nestjs/common';
import { HeroManagementService } from './hero-management.service';
import {
  Hero,
  HeroById,
  HeroesServiceController,
  HeroesServiceControllerMethods,
} from 'libs/grpc/src';
import { Observable } from 'rxjs';

@Controller()
@HeroesServiceControllerMethods()
export class HeroManagementController implements HeroesServiceController {
  constructor(private readonly heroManagementService: HeroManagementService) {}

  findOne(request: HeroById): Hero | Promise<Hero> | Observable<Hero> {
    console.log('Hero Management Controller');
    return this.heroManagementService.getHero(request);
  }
}
