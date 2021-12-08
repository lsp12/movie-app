"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCagetoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cagetory_dto_1 = require("./create-cagetory.dto");
class UpdateCagetoryDto extends (0, mapped_types_1.PartialType)(create_cagetory_dto_1.CreateCagetoryDto) {
}
exports.UpdateCagetoryDto = UpdateCagetoryDto;
//# sourceMappingURL=update-cagetory.dto.js.map