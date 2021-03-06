import { MoviesActorsCagetory } from 'src/movies-cagetory/entities/movies-actors-cagetory.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cagetory {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name_category: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => MoviesActorsCagetory, (mac) => mac.cagetory, {
    cascade: false,
  })
  moviesActorsCagetory: MoviesActorsCagetory[];
}
