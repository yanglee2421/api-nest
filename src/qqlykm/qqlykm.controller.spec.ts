import { Test, TestingModule } from '@nestjs/testing';
import { QqlykmController } from './qqlykm.controller';

describe('QqlykmController', () => {
  let controller: QqlykmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QqlykmController],
    }).compile();

    controller = module.get<QqlykmController>(QqlykmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
