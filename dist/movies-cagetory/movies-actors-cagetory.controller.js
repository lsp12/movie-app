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
exports.MoviesActorsCagetoryController = void 0;
const common_1 = require("@nestjs/common");
const movies_actors_cagetory_service_1 = require("./movies-actors-cagetory.service");
const create_movies_actors_cagetory_dto_1 = require("./dto/create-movies-actors-cagetory.dto");
const update_movies_actors_cagetory_dto_1 = require("./dto/update-movies-actors-cagetory.dto");
let MoviesActorsCagetoryController = class MoviesActorsCagetoryController {
    constructor(moviesActorsCagetoryService) {
        this.moviesActorsCagetoryService = moviesActorsCagetoryService;
    }
    create(createMoviesActorsCagetoryDto) {
        return this.moviesActorsCagetoryService.create(createMoviesActorsCagetoryDto);
    }
    findAll() {
        return this.moviesActorsCagetoryService.findAll();
    }
    findOne(id) {
        return this.moviesActorsCagetoryService.findOne(+id);
    }
    update(id, updateMoviesActorsCagetoryDto) {
        return this.moviesActorsCagetoryService.update(+id, updateMoviesActorsCagetoryDto);
    }
    remove(id) {
        return this.moviesActorsCagetoryService.remove(+id);
    }
    findMovies(id) {
        return this.moviesActorsCagetoryService.findByMovie(+id);
    }
    findActors(id) {
        return this.moviesActorsCagetoryService.findByCagetory(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movies_actors_cagetory_dto_1.CreateMoviesActorsCagetoryDto]),
    __metadata("design:returntype", void 0)
], MoviesActorsCagetoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoviesActorsCagetoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesActorsCagetoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_movies_actors_cagetory_dto_1.UpdateMoviesActorsCagetoryDto]),
    __metadata("design:returntype", void 0)
], MoviesActorsCagetoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesActorsCagetoryController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('mov/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesActorsCagetoryController.prototype, "findMovies", null);
__decorate([
    (0, common_1.Get)('act/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MoviesActorsCagetoryController.prototype, "findActors", null);
MoviesActorsCagetoryController = __decorate([
    (0, common_1.Controller)('movies-actors-cagetory'),
    __metadata("design:paramtypes", [movies_actors_cagetory_service_1.MoviesActorsCagetoryService])
], MoviesActorsCagetoryController);
exports.MoviesActorsCagetoryController = MoviesActorsCagetoryController;
//# sourceMappingURL=movies-actors-cagetory.controller.js.map