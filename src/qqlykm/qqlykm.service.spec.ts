import { Test, TestingModule } from '@nestjs/testing';
import { QqlykmService } from './qqlykm.service';

describe('QqlykmService', () => {
  let service: QqlykmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QqlykmService],
    }).compile();

    service = module.get<QqlykmService>(QqlykmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
