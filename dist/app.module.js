"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const movies_module_1 = require("./movies/movies.module");
const actors_module_1 = require("./actors/actors.module");
const typeorm_1 = require("@nestjs/typeorm");
const constant_1 = require("./config/constant");
const movies_actors_cagetory_module_1 = require("./movies-cagetory/movies-actors-cagetory.module");
const cagetory_module_1 = require("./cagetory/cagetory.module");
const act_movie_module_1 = require("./act-movie/act-movie.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            movies_module_1.MoviesModule,
            movies_actors_cagetory_module_1.MoviesActorsCagetoryModule,
            cagetory_module_1.CagetoryModule,
            actors_module_1.ActorsModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: constant_1.HOST || process.env.HOST,
                port: constant_1.PORT || parseInt(process.env.PORTBASE),
                username: constant_1.USERNAME || process.env.USERNAME,
                password: constant_1.PASSWORD || process.env.PASSWORD,
                database: constant_1.DATABASE || process.env.DATABASE,
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            act_movie_module_1.ActMovieModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map