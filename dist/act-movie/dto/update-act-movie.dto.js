"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActMovieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_act_movie_dto_1 = require("./create-act-movie.dto");
class UpdateActMovieDto extends (0, mapped_types_1.PartialType)(create_act_movie_dto_1.CreateActMovieDto) {
}
exports.UpdateActMovieDto = UpdateActMovieDto;
//# sourceMappingURL=update-act-movie.dto.js.map