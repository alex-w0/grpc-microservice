import { Test, TestingModule } from '@nestjs/testing';
import { HeroManagementController } from './hero-management.controller';
import { HeroManagementService } from './hero-management.service';

describe('HeroManagementController', () => {
  let heroManagementController: HeroManagementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HeroManagementController],
      providers: [HeroManagementService],
    }).compile();

    heroManagementController = app.get<HeroManagementController>(HeroManagementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(heroManagementController.getHello()).toBe('Hello World!');
    });
  });
});
