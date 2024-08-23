"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchObject = void 0;
const sequelize_1 = require("sequelize");
const getSearchObject = (text, fieldList) => {
    if (text) {
        let query = {};
        for (const field of fieldList) {
            query[`$${field}$`] = {
                [sequelize_1.Op.iLike]: `%${text.trim().replace(/%20/g, " ")}%`,
            };
        }
        return { [sequelize_1.Op.or]: query };
    }
    return {};
};
exports.getSearchObject = getSearchObject;
//# sourceMappingURL=getSearchObject.helper.js.map