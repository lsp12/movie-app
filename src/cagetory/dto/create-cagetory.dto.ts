import { MoviesActorsCagetory } from 'src/movies-cagetory/entities/movies-actors-cagetory.entity';

export class CreateCagetoryDto {
  name_category: string;
  moviesActorsCagetory?: MoviesActorsCagetory[];
}
