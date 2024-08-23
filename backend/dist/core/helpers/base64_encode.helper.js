"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64_encode = void 0;
const fs_1 = require("fs");
function base64_encode(file) {
    return "data:image/gif;base64," + (0, fs_1.readFileSync)(file, "base64");
}
exports.base64_encode = base64_encode;
//# sourceMappingURL=base64_encode.helper.js.map