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
exports.Movie = void 0;
const act_movie_entity_1 = require("../../act-movie/entities/act-movie.entity");
const actor_entity_1 = require("../../actors/entities/actor.entity");
const movies_actors_cagetory_entity_1 = require("../../movies-cagetory/entities/movies-actors-cagetory.entity");
const typeorm_1 = require("typeorm");
let Movie = class Movie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Movie.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Movie.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Movie.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Movie.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => movies_actors_cagetory_entity_1.MoviesActorsCagetory, (mac) => mac.movie, {
        cascade: false,
    }),
    __metadata("design:type", Array)
], Movie.prototype, "moviesActorsCagetory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => act_movie_entity_1.ActMovie, (actmode) => actmode.movie, {
        cascade: false,
    }),
    __metadata("design:type", Array)
], Movie.prototype, "actmovie", void 0);
Movie = __decorate([
    (0, typeorm_1.Entity)()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=movie.entity.js.map