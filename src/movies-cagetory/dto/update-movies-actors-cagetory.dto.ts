import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviesActorsCagetoryDto } from './create-movies-actors-cagetory.dto';

export class UpdateMoviesActorsCagetoryDto extends PartialType(
  CreateMoviesActorsCagetoryDto,
) {}
