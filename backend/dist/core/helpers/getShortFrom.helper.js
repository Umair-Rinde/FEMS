"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShortFrom = void 0;
const getShortFrom = (str) => {
    if (str.split(" ").length > 1) {
        var matches = str.match(/\b(\w)/g);
        return matches.join("");
    }
    else {
        return str;
    }
};
exports.getShortFrom = getShortFrom;
//# sourceMappingURL=getShortFrom.helper.js.map