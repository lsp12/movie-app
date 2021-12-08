import { MoviesActorsCagetory } from 'src/movies-cagetory/entities/movies-actors-cagetory.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Cagetory {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name_category: string;

  @OneToMany((type) => MoviesActorsCagetory, (mac) => mac.cagetory, {
    cascade: false,
  })
  moviesActorsCagetory: MoviesActorsCagetory[];
}
