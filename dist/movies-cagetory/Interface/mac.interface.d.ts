import { DeepPartial, DeleteResult, SelectQueryBuilder, UpdateResult } from 'typeorm';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
import { CreateMoviesActorsCagetoryDto } from '../dto/create-movies-actors-cagetory.dto';
import { MoviesActorsCagetory } from '../entities/movies-actors-cagetory.entity';
export interface ImacResponse {
    res: CreateMoviesActorsCagetoryDto | MoviesActorsCagetory | null | MoviesActorsCagetory | UpdateResult | DeleteResult | MoviesActorsCagetory[] | DeepPartial<MoviesActorsCagetory>[] | SelectQueryBuilder<MoviesActorsCagetory> | ColumnMetadata[] | number;
    error: object | null;
}
