import { Test, TestingModule } from '@nestjs/testing';
import { MoviesActorsCagetoryService } from './movies-actors-cagetory.service';

describe('MoviesActorsCagetoryService', () => {
  let service: MoviesActorsCagetoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesActorsCagetoryService],
    }).compile();

    service = module.get<MoviesActorsCagetoryService>(MoviesActorsCagetoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
