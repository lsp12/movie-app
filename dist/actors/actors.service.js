"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const actor_entity_1 = require("./entities/actor.entity");
let ActorsService = class ActorsService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createActorDto) {
        try {
            const res = await this.userRepository.save(createActorDto);
            return {
                res,
                error: null,
            };
        }
        catch (error) {
            return {
                res: null,
                error,
            };
        }
    }
    async findAll() {
        try {
            const res = await this.userRepository.find();
            return {
                res,
                error: null,
            };
        }
        catch (error) {
            return {
                res: null,
                error,
            };
        }
    }
    async findOne(id) {
        try {
            const res = await this.userRepository.findOne(id);
            return {
                res,
                error: null,
            };
        }
        catch (error) {
            return {
                res: null,
                error,
            };
        }
    }
    async update(id, updateActorDto) {
        try {
            const res = await this.userRepository.update(id, updateActorDto);
            return {
                res,
                error: null,
            };
        }
        catch (error) {
            return {
                res: null,
                error,
            };
        }
    }
    async remove(id) {
        try {
            const res = await this.userRepository.delete(id);
            return {
                res,
                error: null,
            };
        }
        catch (error) {
            return {
                res: null,
                error,
            };
        }
    }
};
ActorsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(actor_entity_1.Actor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActorsService);
exports.ActorsService = ActorsService;
//# sourceMappingURL=actors.service.js.map