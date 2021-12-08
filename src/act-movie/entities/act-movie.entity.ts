import { Actor } from 'src/actors/entities/actor.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ActMovie {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @ManyToOne((type) => Movie, (movie) => movie.actmovie, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  movie?: Movie;

  @ManyToOne((type) => Actor, (actor) => actor.actmovie, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  actor?: Actor;
}
