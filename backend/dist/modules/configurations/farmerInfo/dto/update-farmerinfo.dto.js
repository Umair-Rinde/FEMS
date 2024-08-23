"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFarmerInfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_farmerinfo_dto_1 = require("./create-farmerinfo.dto");
class UpdateFarmerInfoDto extends (0, mapped_types_1.PartialType)(create_farmerinfo_dto_1.CreateFarmerInfoDto) {
}
exports.UpdateFarmerInfoDto = UpdateFarmerInfoDto;
//# sourceMappingURL=update-farmerinfo.dto.js.map