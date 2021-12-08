import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    create(createMovieDto: CreateMovieDto): Promise<import("./Interface/movies.interface").ImoviesResponse>;
    findAll(): Promise<import("./Interface/movies.interface").ImoviesResponse>;
    findOne(id: string): Promise<import("./Interface/movies.interface").ImoviesResponse>;
    update(id: string, updateMovieDto: UpdateMovieDto): Promise<import("./Interface/movies.interface").ImoviesResponse>;
    remove(id: string): Promise<import("./Interface/movies.interface").ImoviesResponse>;
}
