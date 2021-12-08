import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { ImoviesResponse } from './Interface/movies.interface';
export declare class MoviesService {
    userRepository: Repository<Movie>;
    constructor(userRepository: Repository<Movie>);
    create(createMovieDto: CreateMovieDto): Promise<ImoviesResponse>;
    findAll(): Promise<ImoviesResponse>;
    findOne(id: number): Promise<ImoviesResponse>;
    update(id: number, updateMovieDto: UpdateMovieDto): Promise<ImoviesResponse>;
    remove(id: number): Promise<ImoviesResponse>;
}
