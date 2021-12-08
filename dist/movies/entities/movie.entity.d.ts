import { ActMovie } from 'src/act-movie/entities/act-movie.entity';
import { MoviesActorsCagetory } from 'src/movies-cagetory/entities/movies-actors-cagetory.entity';
export declare class Movie {
    id?: number;
    title: string;
    description: string;
    duration: number;
    image_url: string;
    created_at?: Date;
    updated_at?: Date;
    moviesActorsCagetory: MoviesActorsCagetory[];
    actmovie: ActMovie[];
}
