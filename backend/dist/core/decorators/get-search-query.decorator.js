"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSearchQuery = void 0;
const common_1 = require("@nestjs/common");
exports.GetSearchQuery = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.query.query;
    if (!query)
        return undefined;
    return query.trim();
});
//# sourceMappingURL=get-search-query.decorator.js.map