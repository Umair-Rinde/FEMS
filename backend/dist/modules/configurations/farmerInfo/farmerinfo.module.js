"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FarmerInfoModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const farmerinfo_model_1 = require("./farmerinfo.model");
const farmerinfo_controller_1 = require("./farmerinfo.controller");
const farmerinfo_service_1 = require("./farmerinfo.service");
let FarmerInfoModule = class FarmerInfoModule {
};
exports.FarmerInfoModule = FarmerInfoModule;
exports.FarmerInfoModule = FarmerInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([farmerinfo_model_1.FarmerInfo])],
        providers: [farmerinfo_service_1.FarmerInfoService],
        controllers: [farmerinfo_controller_1.FarmerInfoController]
    })
], FarmerInfoModule);
//# sourceMappingURL=farmerinfo.module.js.map