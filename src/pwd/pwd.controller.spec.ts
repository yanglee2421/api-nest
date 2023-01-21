import { Test, TestingModule } from '@nestjs/testing';
import { PwdController } from './pwd.controller';

describe('PwdController', () => {
  let controller: PwdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PwdController],
    }).compile();

    controller = module.get<PwdController>(PwdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
