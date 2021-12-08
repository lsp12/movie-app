import { ActorsService } from './actors.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
export declare class ActorsController {
    private readonly actorsService;
    constructor(actorsService: ActorsService);
    create(createActorDto: CreateActorDto): Promise<import("./Interface/actors.interface").IActorsResponse>;
    findAll(): Promise<import("./Interface/actors.interface").IActorsResponse>;
    findOne(id: string): Promise<import("./Interface/actors.interface").IActorsResponse>;
    update(id: string, updateActorDto: UpdateActorDto): Promise<{
        res: import("typeorm").UpdateResult;
        error: any;
    } | {
        res: any;
        error: any;
    }>;
    remove(id: string): Promise<import("./Interface/actors.interface").IActorsResponse>;
}
