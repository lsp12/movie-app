import { ActMovie } from 'src/act-movie/entities/act-movie.entity';
export declare class Actor {
    id?: number;
    name: string;
    age: number;
    urlPhoto: string;
    actmovie: ActMovie[];
}
