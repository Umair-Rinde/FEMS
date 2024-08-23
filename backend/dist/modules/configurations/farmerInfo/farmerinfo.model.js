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
exports.FarmerInfo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const base_model_1 = require("../../../core/base.model");
let FarmerInfo = class FarmerInfo extends base_model_1.MyBaseModel {
};
exports.FarmerInfo = FarmerInfo;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FarmerInfo.prototype, "state", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FarmerInfo.prototype, "pinCode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FarmerInfo.prototype, "districts", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FarmerInfo.prototype, "region", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FarmerInfo.prototype, "crops", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FarmerInfo.prototype, "aboutYou", void 0);
exports.FarmerInfo = FarmerInfo = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'Farmers',
        paranoid: true
    })
], FarmerInfo);
//# sourceMappingURL=farmerinfo.model.js.map