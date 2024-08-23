"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcrypt = void 0;
const bcryptjs = require("bcryptjs");
class bcrypt {
    static async createHash(password) {
        return await bcryptjs.hash(password, 10);
    }
    static async compare(oldPassword, currPassword) {
        return await bcryptjs.compare(currPassword, oldPassword);
    }
}
exports.bcrypt = bcrypt;
//# sourceMappingURL=bcrypt.helper.js.map