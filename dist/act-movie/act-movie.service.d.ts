import { Repository } from 'typeorm';
import { CreateActMovieDto } from './dto/create-act-movie.dto';
import { UpdateActMovieDto } from './dto/update-act-movie.dto';
import { ActMovie } from './entities/act-movie.entity';
import { IactmovieResponse } from './Interface/actmovie.interface';
export declare class ActMovieService {
    categoryRepository: Repository<ActMovie>;
    constructor(categoryRepository: Repository<ActMovie>);
    create(createActMovieDto: CreateActMovieDto): Promise<IactmovieResponse>;
    findAll(): Promise<IactmovieResponse>;
    findOne(id: number): Promise<IactmovieResponse>;
    update(id: number, updateActMovieDto: UpdateActMovieDto): Promise<IactmovieResponse>;
    delete(id: number): Promise<IactmovieResponse>;
    findByMovie(id: number): Promise<IactmovieResponse>;
    findByActor(id: number): Promise<IactmovieResponse>;
}
