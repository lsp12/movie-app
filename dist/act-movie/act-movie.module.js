"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActMovieModule = void 0;
const common_1 = require("@nestjs/common");
const act_movie_service_1 = require("./act-movie.service");
const act_movie_controller_1 = require("./act-movie.controller");
const typeorm_1 = require("@nestjs/typeorm");
const act_movie_entity_1 = require("./entities/act-movie.entity");
let ActMovieModule = class ActMovieModule {
};
ActMovieModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([act_movie_entity_1.ActMovie])],
        controllers: [act_movie_controller_1.ActMovieController],
        providers: [act_movie_service_1.ActMovieService],
    })
], ActMovieModule);
exports.ActMovieModule = ActMovieModule;
//# sourceMappingURL=act-movie.module.js.map