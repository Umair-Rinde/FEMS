"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMetaDataDTO = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_meta_dto_1 = require("./create-meta.dto");
class UpdateMetaDataDTO extends (0, mapped_types_1.PartialType)(create_meta_dto_1.MetaDataDto) {
    constructor(metaService) {
        super(metaService);
        this.metaService = metaService;
    }
}
exports.UpdateMetaDataDTO = UpdateMetaDataDTO;
//# sourceMappingURL=update-meta.dto.js.map