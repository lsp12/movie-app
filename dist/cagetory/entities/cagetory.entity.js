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
exports.Cagetory = void 0;
const movies_actors_cagetory_entity_1 = require("../../movies-cagetory/entities/movies-actors-cagetory.entity");
const typeorm_1 = require("typeorm");
let Cagetory = class Cagetory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Cagetory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cagetory.prototype, "name_category", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => movies_actors_cagetory_entity_1.MoviesActorsCagetory, (mac) => mac.cagetory, {
        cascade: false,
    }),
    __metadata("design:type", Array)
], Cagetory.prototype, "moviesActorsCagetory", void 0);
Cagetory = __decorate([
    (0, typeorm_1.Entity)()
], Cagetory);
exports.Cagetory = Cagetory;
//# sourceMappingURL=cagetory.entity.js.map