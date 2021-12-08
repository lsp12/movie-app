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
exports.Actor = void 0;
const act_movie_entity_1 = require("../../act-movie/entities/act-movie.entity");
const typeorm_1 = require("typeorm");
let Actor = class Actor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Actor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Actor.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Actor.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Actor.prototype, "urlPhoto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => act_movie_entity_1.ActMovie, (actmode) => actmode.actor, {
        cascade: false,
    }),
    __metadata("design:type", Array)
], Actor.prototype, "actmovie", void 0);
Actor = __decorate([
    (0, typeorm_1.Entity)()
], Actor);
exports.Actor = Actor;
//# sourceMappingURL=actor.entity.js.map