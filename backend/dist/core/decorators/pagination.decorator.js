"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const common_1 = require("@nestjs/common");
exports.Pagination = (0, common_1.createParamDecorator)((_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const query = request.query;
    let pagination = {};
    if (!(query.limit && query.page)) {
        return null;
    }
    query.limit = parseInt(query.limit, 10) || 2;
    query.page = parseInt(query.page, 10) + 1 || 1;
    query.offset = query.limit * (query.page - 1);
    pagination = {
        limit: query.limit || 2,
        offset: query.limit * (query.page - 1),
    };
    return pagination;
});
//# sourceMappingURL=pagination.decorator.js.map