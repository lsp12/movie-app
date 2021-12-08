import { Actor } from 'src/actors/entities/actor.entity';
import { Movie } from 'src/movies/entities/movie.entity';

export class CreateActMovieDto {
  movie: Movie;
  actor: Actor[];
}
