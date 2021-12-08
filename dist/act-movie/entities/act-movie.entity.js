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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActMovie = void 0;
const actor_entity_1 = require("../../actors/entities/actor.entity");
const movie_entity_1 = require("../../movies/entities/movie.entity");
const typeorm_1 = require("typeorm");
let ActMovie = class ActMovie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], ActMovie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => movie_entity_1.Movie, (movie) => movie.actmovie, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", movie_entity_1.Movie)
], ActMovie.prototype, "movie", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => actor_entity_1.Actor, (actor) => actor.actmovie, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", actor_entity_1.Actor)
], ActMovie.prototype, "actor", void 0);
ActMovie = __decorate([
    (0, typeorm_1.Entity)()
], ActMovie);
exports.ActMovie = ActMovie;
//# sourceMappingURL=act-movie.entity.js.map