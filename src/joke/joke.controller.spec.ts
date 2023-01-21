import { Test, TestingModule } from '@nestjs/testing';
import { JokeController } from './joke.controller';

describe('JokeController', () => {
  let controller: JokeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JokeController],
    }).compile();

    controller = module.get<JokeController>(JokeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
