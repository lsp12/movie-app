import { Test, TestingModule } from '@nestjs/testing';
import { ActMovieService } from './act-movie.service';

describe('ActMovieService', () => {
  let service: ActMovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActMovieService],
    }).compile();

    service = module.get<ActMovieService>(ActMovieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
