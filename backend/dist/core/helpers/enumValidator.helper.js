"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumValidator = void 0;
const common_1 = require("@nestjs/common");
function enumValidator(options, field) {
    return {
        checkEnum(value) {
            if (!options.includes(value)) {
                throw new common_1.BadRequestException(`${field} must be in (${options.join(", ")})`);
            }
        },
    };
}
exports.enumValidator = enumValidator;
//# sourceMappingURL=enumValidator.helper.js.map