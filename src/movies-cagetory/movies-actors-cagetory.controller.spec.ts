import { Test, TestingModule } from '@nestjs/testing';
import { MoviesActorsCagetoryController } from './movies-actors-cagetory.controller';
import { MoviesActorsCagetoryService } from './movies-actors-cagetory.service';

describe('MoviesActorsCagetoryController', () => {
  let controller: MoviesActorsCagetoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesActorsCagetoryController],
      providers: [MoviesActorsCagetoryService],
    }).compile();

    controller = module.get<MoviesActorsCagetoryController>(MoviesActorsCagetoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
