import { Test, TestingModule } from '@nestjs/testing';
import { PasService } from './pas.service';

describe('PasService', () => {
  let service: PasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasService],
    }).compile();

    service = module.get<PasService>(PasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
