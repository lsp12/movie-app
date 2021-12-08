import { ActMovie } from 'src/act-movie/entities/act-movie.entity';
import { Actor } from 'src/actors/entities/actor.entity';
import { MoviesActorsCagetory } from 'src/movies-cagetory/entities/movies-actors-cagetory.entity';
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
export class Movie {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  duration: number;

  @Column()
  image_url: string;

  @Column()
  created_at?: Date;

  @Column()
  updated_at?: Date;

  @OneToMany((type) => MoviesActorsCagetory, (mac) => mac.movie, {
    cascade: false,
  })
  moviesActorsCagetory: MoviesActorsCagetory[];

  @OneToMany((type) => ActMovie, (actmode) => actmode.movie, {
    cascade: false,
  })
  actmovie: ActMovie[];
}
