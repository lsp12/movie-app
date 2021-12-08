import { PartialType } from '@nestjs/mapped-types';
import { CreateActMovieDto } from './create-act-movie.dto';

export class UpdateActMovieDto extends PartialType(CreateActMovieDto) {}
