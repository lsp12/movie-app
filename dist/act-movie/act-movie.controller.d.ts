import { ActMovieService } from './act-movie.service';
import { CreateActMovieDto } from './dto/create-act-movie.dto';
import { UpdateActMovieDto } from './dto/update-act-movie.dto';
export declare class ActMovieController {
    private readonly actMovieService;
    constructor(actMovieService: ActMovieService);
    create(createActMovieDto: CreateActMovieDto): Promise<import("./Interface/actmovie.interface").IactmovieResponse>;
    findAll(): Promise<import("./Interface/actmovie.interface").IactmovieResponse>;
    findOne(id: string): Promise<import("./Interface/actmovie.interface").IactmovieResponse>;
    update(id: string, updateActMovieDto: UpdateActMovieDto): Promise<import("./Interface/actmovie.interface").IactmovieResponse>;
    remove(id: string): Promise<import("./Interface/actmovie.interface").IactmovieResponse>;
    findByAct(id: string): Promise<import("./Interface/actmovie.interface").IactmovieResponse>;
    findByMov(id: string): Promise<import("./Interface/actmovie.interface").IactmovieResponse>;
}
