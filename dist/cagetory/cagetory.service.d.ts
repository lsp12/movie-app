import { Repository } from 'typeorm';
import { CreateCagetoryDto } from './dto/create-cagetory.dto';
import { UpdateCagetoryDto } from './dto/update-cagetory.dto';
import { Cagetory } from './entities/cagetory.entity';
import { IcategoryResponse } from './Interface/cagetory.interface';
export declare class CagetoryService {
    categoryRepository: Repository<Cagetory>;
    constructor(categoryRepository: Repository<Cagetory>);
    create(createCagetoryDto: CreateCagetoryDto): Promise<IcategoryResponse>;
    findAll(): Promise<IcategoryResponse>;
    findOne(id: number): Promise<IcategoryResponse>;
    update(id: number, updateCagetoryDto: UpdateCagetoryDto): Promise<IcategoryResponse>;
    remove(id: number): Promise<IcategoryResponse>;
}
