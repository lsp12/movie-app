import { DeleteResult } from 'typeorm';
import { Movie } from '../entities/movie.entity';

export interface ImoviesResponse {
  res: Movie[] | null | Movie | DeleteResult;
  error: object | null;
}
