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
exports.RegionController = void 0;
const common_1 = require("@nestjs/common");
const modules_1 = require("../../../core/modules");
const create_region_dto_1 = require("./dto/create-region.dto");
const update_region_dto_1 = require("./dto/update-region.dto");
const region_service_1 = require("./region.service");
let RegionController = class RegionController extends (0, modules_1.GenericController)({
    createObjDTO: create_region_dto_1.CreateRegionDto,
    updateObjDTO: update_region_dto_1.UpdateRegionDto,
}) {
    constructor(regionService) {
        super(regionService);
        this.regionService = regionService;
    }
};
exports.RegionController = RegionController;
exports.RegionController = RegionController = __decorate([
    (0, common_1.Controller)('configurations/region'),
    __metadata("design:paramtypes", [region_service_1.RegionService])
], RegionController);
//# sourceMappingURL=region.contoller.js.map