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
exports.ActMovieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const act_movie_entity_1 = require("./entities/act-movie.entity");
const safeJsonStringify = require('safe-json-stringify');
let ActMovieService = class ActMovieService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createActMovieDto) {
        try {
            let cont = 0;
            createActMovieDto.actor.map((item) => {
                this.categoryRepository.insert({
                    movie: createActMovieDto.movie,
                    actor: item,
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
            const res = await this.categoryRepository
                .createQueryBuilder('actmovie')
                .leftJoinAndSelect('actmovie.movie', 'movie')
                .leftJoinAndSelect('actmovie.actor', 'actor')
                .groupBy('actmovie.actorId');
            const result = await res.getMany();
            const result2 = safeJsonStringify(result);
            const result3 = JSON.parse(result2);
            return {
                res: result3,
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
    async update(id, updateActMovieDto) {
        try {
            let cont = 0;
            updateActMovieDto.actor.map(async (item) => {
                const res = await this.categoryRepository.create({
                    movie: updateActMovieDto.movie,
                    actor: item,
                });
                await this.categoryRepository.update(id, res);
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
    async delete(id) {
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
    async findByMovie(id) {
        try {
            const res = await this.categoryRepository.find({
                join: {
                    alias: 'actmovie',
                    leftJoinAndSelect: { actor: 'actmovie.actor' },
                },
                where: { movie: id },
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
    async findByActor(id) {
        try {
            const res = await this.categoryRepository
                .createQueryBuilder('actmovie')
                .leftJoinAndSelect('actmovie.movie', 'movie')
                .leftJoinAndSelect('actmovie.actor', 'actor')
                .where('actmovie.actor = :id', { id })
                .groupBy('actmovie.movie');
            const result = await res.getMany();
            const result2 = safeJsonStringify(result);
            const result3 = JSON.parse(result2);
            return {
                res: result3,
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
ActMovieService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(act_movie_entity_1.ActMovie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActMovieService);
exports.ActMovieService = ActMovieService;
//# sourceMappingURL=act-movie.service.js.map