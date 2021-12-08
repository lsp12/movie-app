import { CagetoryService } from './cagetory.service';
import { CreateCagetoryDto } from './dto/create-cagetory.dto';
import { UpdateCagetoryDto } from './dto/update-cagetory.dto';
export declare class CagetoryController {
    private readonly cagetoryService;
    constructor(cagetoryService: CagetoryService);
    create(createCagetoryDto: CreateCagetoryDto): Promise<import("./Interface/cagetory.interface").IcategoryResponse>;
    findAll(): Promise<import("./Interface/cagetory.interface").IcategoryResponse>;
    findOne(id: string): Promise<import("./Interface/cagetory.interface").IcategoryResponse>;
    update(id: string, updateCagetoryDto: UpdateCagetoryDto): Promise<import("./Interface/cagetory.interface").IcategoryResponse>;
    remove(id: string): Promise<import("./Interface/cagetory.interface").IcategoryResponse>;
}
