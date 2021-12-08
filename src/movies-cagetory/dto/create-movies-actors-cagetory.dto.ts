import { Actor } from 'src/actors/entities/actor.entity';
import { Cagetory } from 'src/cagetory/entities/cagetory.entity';
import { Movie } from 'src/movies/entities/movie.entity';

export class CreateMoviesActorsCagetoryDto {
  movie: Movie;
  category: Cagetory[];
}
