import { MoviesActorsCagetoryService } from './movies-actors-cagetory.service';
import { CreateMoviesActorsCagetoryDto } from './dto/create-movies-actors-cagetory.dto';
import { UpdateMoviesActorsCagetoryDto } from './dto/update-movies-actors-cagetory.dto';
export declare class MoviesActorsCagetoryController {
    private readonly moviesActorsCagetoryService;
    constructor(moviesActorsCagetoryService: MoviesActorsCagetoryService);
    create(createMoviesActorsCagetoryDto: CreateMoviesActorsCagetoryDto): Promise<import("./Interface/mac.interface").ImacResponse>;
    findAll(): Promise<import("./Interface/mac.interface").ImacResponse>;
    findOne(id: string): Promise<import("./Interface/mac.interface").ImacResponse>;
    update(id: string, updateMoviesActorsCagetoryDto: UpdateMoviesActorsCagetoryDto): Promise<import("./Interface/mac.interface").ImacResponse>;
    remove(id: string): Promise<import("./Interface/mac.interface").ImacResponse>;
    findMovies(id: string): Promise<import("./Interface/mac.interface").ImacResponse>;
    findActors(id: string): Promise<import("./Interface/mac.interface").ImacResponse>;
}
