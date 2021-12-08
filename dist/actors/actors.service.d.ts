import { Repository } from 'typeorm';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './entities/actor.entity';
import { IActorsResponse } from './Interface/actors.interface';
export declare class ActorsService {
    userRepository: Repository<Actor>;
    constructor(userRepository: Repository<Actor>);
    create(createActorDto: CreateActorDto): Promise<IActorsResponse>;
    findAll(): Promise<IActorsResponse>;
    findOne(id: number): Promise<IActorsResponse>;
    update(id: number, updateActorDto: UpdateActorDto): Promise<{
        res: import("typeorm").UpdateResult;
        error: any;
    } | {
        res: any;
        error: any;
    }>;
    remove(id: number): Promise<IActorsResponse>;
}
