import { ActMovie } from 'src/act-movie/entities/act-movie.entity';
import { MoviesActorsCagetory } from 'src/movies-cagetory/entities/movies-actors-cagetory.entity';
import { Movie } from 'src/movies/entities/movie.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Actor {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  urlPhoto: string;

  @OneToMany((type) => ActMovie, (actmode) => actmode.actor, {
    cascade: false,
  })
  actmovie: ActMovie[];
}
