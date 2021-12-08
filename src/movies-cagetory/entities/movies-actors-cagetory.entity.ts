import { Actor } from 'src/actors/entities/actor.entity';
import { Cagetory } from 'src/cagetory/entities/cagetory.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MoviesActorsCagetory {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @ManyToOne((type) => Movie, (movie) => movie.moviesActorsCagetory, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  movie?: Movie;

  @ManyToOne((type) => Cagetory, (category) => category.moviesActorsCagetory, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  cagetory?: Cagetory;
}
