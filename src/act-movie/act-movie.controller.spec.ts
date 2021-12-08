import { Test, TestingModule } from '@nestjs/testing';
import { ActMovieController } from './act-movie.controller';
import { ActMovieService } from './act-movie.service';

describe('ActMovieController', () => {
  let controller: ActMovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActMovieController],
      providers: [ActMovieService],
    }).compile();

    controller = module.get<ActMovieController>(ActMovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
