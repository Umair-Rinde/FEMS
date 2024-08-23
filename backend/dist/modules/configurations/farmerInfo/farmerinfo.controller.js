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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmerInfoController = void 0;
const common_1 = require("@nestjs/common");
const modules_1 = require("../../../core/modules");
const create_farmerinfo_dto_1 = require("./dto/create-farmerinfo.dto");
const update_farmerinfo_dto_1 = require("./dto/update-farmerinfo.dto");
const farmerinfo_service_1 = require("./farmerinfo.service");
let FarmerInfoController = class FarmerInfoController extends (0, modules_1.GenericController)({
    createObjDTO: create_farmerinfo_dto_1.CreateFarmerInfoDto,
    updateObjDTO: update_farmerinfo_dto_1.UpdateFarmerInfoDto,
}) {
    constructor(regionService) {
        super(regionService);
        this.regionService = regionService;
    }
};
exports.FarmerInfoController = FarmerInfoController;
exports.FarmerInfoController = FarmerInfoController = __decorate([
    (0, common_1.Controller)('configurations/region'),
    __metadata("design:paramtypes", [farmerinfo_service_1.FarmerInfoService])
], FarmerInfoController);
//# sourceMappingURL=farmerinfo.controller.js.map