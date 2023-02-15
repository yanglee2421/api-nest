import { Test, TestingModule } from '@nestjs/testing';
import { PasController } from './pas.controller';

describe('PasController', () => {
  let controller: PasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasController],
    }).compile();

    controller = module.get<PasController>(PasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
