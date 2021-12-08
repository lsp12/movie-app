import { Actor } from 'src/actors/entities/actor.entity';

export class CreateMovieDto {
  readonly title: string;
  readonly description: string;
  readonly duration: number;
  readonly image_url: string;
  created_at?: Date;
  updated_at?: Date;
}
