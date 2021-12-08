import { DeleteResult, UpdateResult } from 'typeorm';
import { ActMovie } from '../entities/act-movie.entity';
export interface IactmovieResponse {
    res: ActMovie[] | null | ActMovie | UpdateResult | DeleteResult | number;
    error: object | null;
}
