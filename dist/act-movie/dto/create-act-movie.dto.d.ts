import { Actor } from 'src/actors/entities/actor.entity';
import { Movie } from 'src/movies/entities/movie.entity';
export declare class CreateActMovieDto {
    movie: Movie;
    actor: Actor[];
}
