import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateCagetoryDto } from '../dto/create-cagetory.dto';
import { Cagetory } from '../entities/cagetory.entity';

export interface IcategoryResponse {
  res:
    | CreateCagetoryDto
    | Cagetory
    | Cagetory[]
    | UpdateResult
    | DeleteResult
    | null;
  error: object | null;
}
