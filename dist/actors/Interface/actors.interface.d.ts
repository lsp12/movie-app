import { DeleteResult } from 'typeorm';
import { Actor } from '../entities/actor.entity';
export interface IActorsResponse {
    res: Actor[] | null | Actor | DeleteResult;
    error: object | null;
}
