import { Test, TestingModule } from '@nestjs/testing';
import { CagetoryService } from './cagetory.service';

describe('CagetoryService', () => {
  let service: CagetoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CagetoryService],
    }).compile();

    service = module.get<CagetoryService>(CagetoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
