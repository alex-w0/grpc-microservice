import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { HERO_PACKAGE_NAME } from 'libs/grpc/src';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: HERO_PACKAGE_NAME,
        transport: Transport.GRPC,
        options: {
          package: HERO_PACKAGE_NAME,
          protoPath: join(__dirname, './hero.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
