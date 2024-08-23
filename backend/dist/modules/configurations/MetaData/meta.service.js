"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataService = void 0;
const common_1 = require("@nestjs/common");
const modules_1 = require("../../../core/modules");
const meta_model_1 = require("./meta.model");
const sequelize_1 = require("@nestjs/sequelize");
let MetaDataService = class MetaDataService extends (0, modules_1.GenericService)({}) {
    constructor(metaData, reqParams) {
        super(metaData, reqParams);
        this.metaData = metaData;
        this.reqParams = reqParams;
    }
    generateSlug(text) {
        if (text)
            return text
                .toLowerCase()
                .replace(/[^\w\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/--+/g, '-')
                .trim();
    }
    async update(data, id) {
        const obj = await this.getOneObj(id);
        data.slug = this.generateSlug(data.slug);
        await obj.update(data);
        return obj;
    }
};
exports.MetaDataService = MetaDataService;
exports.MetaDataService = MetaDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(meta_model_1.MetaData)),
    __metadata("design:paramtypes", [Object, modules_1.RequestParamsService])
], MetaDataService);
//# sourceMappingURL=meta.service.js.map