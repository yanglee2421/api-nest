import { Test, TestingModule } from '@nestjs/testing';
import { BingController } from './bing.controller';

describe('BingController', () => {
  let controller: BingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BingController],
    }).compile();

    controller = module.get<BingController>(BingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
