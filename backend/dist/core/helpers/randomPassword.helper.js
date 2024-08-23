"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomPassword = void 0;
function getRandomPassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }
    return pass;
}
exports.getRandomPassword = getRandomPassword;
//# sourceMappingURL=randomPassword.helper.js.map