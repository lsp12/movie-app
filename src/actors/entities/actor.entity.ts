import { ActMovie } from 'src/act-movie/entities/act-movie.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => ActMovie, (actmode) => actmode.actor, {
    cascade: false,
  })
  actmovie: ActMovie[];
}
