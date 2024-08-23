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
exports.FarmerInfoService = void 0;
const common_1 = require("@nestjs/common");
const modules_1 = require("../../../core/modules");
const sequelize_1 = require("@nestjs/sequelize");
const farmerinfo_model_1 = require("./farmerinfo.model");
let FarmerInfoService = class FarmerInfoService extends (0, modules_1.GenericService)({}) {
    constructor(farmerinfo, reqParams) {
        super(farmerinfo, reqParams);
        this.farmerinfo = farmerinfo;
        this.reqParams = reqParams;
    }
};
exports.FarmerInfoService = FarmerInfoService;
exports.FarmerInfoService = FarmerInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(farmerinfo_model_1.FarmerInfo)),
    __metadata("design:paramtypes", [Object, modules_1.RequestParamsService])
], FarmerInfoService);
//# sourceMappingURL=farmerinfo.service.js.map