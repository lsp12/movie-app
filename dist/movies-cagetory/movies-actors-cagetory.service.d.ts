import { Repository } from 'typeorm';
import { CreateMoviesActorsCagetoryDto } from './dto/create-movies-actors-cagetory.dto';
import { UpdateMoviesActorsCagetoryDto } from './dto/update-movies-actors-cagetory.dto';
import { MoviesActorsCagetory } from './entities/movies-actors-cagetory.entity';
import { ImacResponse } from './Interface/mac.interface';
export declare class MoviesActorsCagetoryService {
    categoryRepository: Repository<MoviesActorsCagetory>;
    constructor(categoryRepository: Repository<MoviesActorsCagetory>);
    create(createMoviesActorsCagetoryDto: CreateMoviesActorsCagetoryDto): Promise<ImacResponse>;
    findAll(): Promise<ImacResponse>;
    update(id: number, updateMoviesActorsCagetoryDto: UpdateMoviesActorsCagetoryDto): Promise<ImacResponse>;
    remove(id: number): Promise<ImacResponse>;
    findOne(id: number): Promise<ImacResponse>;
    findByMovie(id: number): Promise<ImacResponse>;
    findByCagetory(id: number): Promise<ImacResponse>;
}
