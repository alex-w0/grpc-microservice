import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  Hero,
  HeroesServiceClient,
  HEROES_SERVICE_NAME,
  HERO_PACKAGE_NAME,
} from 'libs/grpc/src';
import { Observable } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  #heroService: HeroesServiceClient;

  constructor(@Inject(HERO_PACKAGE_NAME) private client: ClientGrpc) {}

  onModuleInit(): void {
    this.#heroService =
      this.client.getService<HeroesServiceClient>(HEROES_SERVICE_NAME);
  }

  getOne(id: number): Observable<Hero> {
    console.info('API Service');
    return this.#heroService.findOne({ id });
  }
}
