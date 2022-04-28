import { Injectable } from '@nestjs/common';
import { Hero, HeroById } from 'libs/grpc/src';

@Injectable()
export class HeroManagementService {
  getHero({ id }: HeroById): Hero {
    console.info('Hero Management Service');

    return {
      id,
      name: 'Hero',
    };
  }
}
