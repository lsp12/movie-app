import { Test, TestingModule } from '@nestjs/testing';
import { CagetoryController } from './cagetory.controller';
import { CagetoryService } from './cagetory.service';

describe('CagetoryController', () => {
  let controller: CagetoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CagetoryController],
      providers: [CagetoryService],
    }).compile();

    controller = module.get<CagetoryController>(CagetoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
