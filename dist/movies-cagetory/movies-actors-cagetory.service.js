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
exports.MoviesActorsCagetoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movies_actors_cagetory_entity_1 = require("./entities/movies-actors-cagetory.entity");
const safeJsonStringify = require('safe-json-stringify');
let MoviesActorsCagetoryService = class MoviesActorsCagetoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createMoviesActorsCagetoryDto) {
        try {
            let cont = 0;
            createMoviesActorsCagetoryDto.category.map((item) => {
                this.categoryRepository.insert({
                    movie: createMoviesActorsCagetoryDto.movie,
                    cagetory: item,
                });
                cont++;
            });
            return {
                res: cont,
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
            const res = this.categoryRepository
                .createQueryBuilder('movies_actors_cagetory')
                .select('movies_actors_cagetory.movie', 'movie')
                .innerJoinAndSelect('movies_actors_cagetory.movie', 'movie')
                .innerJoinAndSelect('movies_actors_cagetory.cagetory', 'cagetory')
                .groupBy('movies_actors_cagetory.cagetoryId');
            const res2 = await res.getRawMany();
            const res3 = safeJsonStringify(res2);
            const res4 = JSON.parse(res3);
            console.log(res4);
            return {
                res: res4,
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
    async update(id, updateMoviesActorsCagetoryDto) {
        try {
            const res = await this.categoryRepository.update(id, updateMoviesActorsCagetoryDto);
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
            const res = await this.categoryRepository.delete(id);
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
            const res = await this.categoryRepository.findOne(id);
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
    async findByMovie(id) {
        try {
            const res = await this.categoryRepository.find({
                join: {
                    alias: 'movies_actors_cagetory',
                    leftJoinAndSelect: { category: 'movies_actors_cagetory.cagetory' },
                },
                where: {
                    movie: id,
                },
            });
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
    async findByCagetory(id) {
        try {
            const res = this.categoryRepository
                .createQueryBuilder('movies_actors_cagetory')
                .select('movies_actors_cagetory.movie', 'movie')
                .innerJoinAndSelect('movies_actors_cagetory.movie', 'movie')
                .innerJoinAndSelect('movies_actors_cagetory.cagetory', 'cagetory')
                .where('movies_actors_cagetory.cagetory = :id', { id })
                .groupBy('movies_actors_cagetory.movieId');
            const res2 = await res.getRawMany();
            const res3 = safeJsonStringify(res2);
            const res4 = JSON.parse(res3);
            return {
                res: res4,
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
MoviesActorsCagetoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(movies_actors_cagetory_entity_1.MoviesActorsCagetory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MoviesActorsCagetoryService);
exports.MoviesActorsCagetoryService = MoviesActorsCagetoryService;
//# sourceMappingURL=movies-actors-cagetory.service.js.map