"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterIntercepter = void 0;
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const helpers_1 = require("../helpers");
const multer_interfaces_1 = require("../interfaces/multer.interfaces");
function MulterIntercepter({ fieldName, path, type, addDateTime = true, maxFiles, }) {
    if (type === multer_interfaces_1.MulterEnum.single) {
        return (0, platform_express_1.FileInterceptor)(fieldName, {
            storage: (0, multer_1.diskStorage)({
                destination: 'src/public' + path,
                filename: (req, file, cb) => helpers_1.Helper.customFileName(req, file, cb, addDateTime),
            }),
        });
    }
    else if (type === multer_interfaces_1.MulterEnum.multiple) {
        return (0, platform_express_1.FilesInterceptor)(fieldName, maxFiles, {
            storage: (0, multer_1.diskStorage)({
                destination: 'src/public' + path,
                filename: (req, file, cb) => helpers_1.Helper.customFileName(req, file, cb, addDateTime),
            }),
        });
    }
    else if (type === multer_interfaces_1.MulterEnum.any) {
        return (0, platform_express_1.AnyFilesInterceptor)({
            storage: (0, multer_1.diskStorage)({
                destination: 'src/public' + path,
                filename: (req, file, cb) => helpers_1.Helper.customFileName(req, file, cb, addDateTime),
            }),
        });
    }
}
exports.MulterIntercepter = MulterIntercepter;
//# sourceMappingURL=multer.intercepter.js.map