"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const path_1 = require("path");
class Helper {
    static customFileName(_, file, cb, addDateTime = true) {
        let uniqueSuffix = '';
        if (addDateTime) {
            uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        }
        let fileExtension = (0, path_1.extname)(file.originalname);
        const originalName = file.originalname.split('.')[0];
        cb(null, originalName + '-' + uniqueSuffix + fileExtension);
    }
    static destinationPath(_, _1, cb, path) {
        cb(null, './src/public' + path);
    }
}
exports.Helper = Helper;
//# sourceMappingURL=multer.helper.js.map