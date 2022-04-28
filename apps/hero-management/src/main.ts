import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { HeroManagementModule } from './hero-management.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    HeroManagementModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, 'hero/hero.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
