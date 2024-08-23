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
exports.MetaDataController = void 0;
const common_1 = require("@nestjs/common");
const modules_1 = require("../../../core/modules");
const dto_1 = require("./dto");
const meta_service_1 = require("./meta.service");
let MetaDataController = class MetaDataController extends (0, modules_1.GenericController)({ createObjDTO: dto_1.MetaDataDto, updateObjDTO: dto_1.UpdateMetaDataDTO }) {
    constructor(metaService) {
        super(metaService);
        this.metaService = metaService;
    }
};
exports.MetaDataController = MetaDataController;
exports.MetaDataController = MetaDataController = __decorate([
    (0, common_1.Controller)('configurations/meta-data'),
    __metadata("design:paramtypes", [meta_service_1.MetaDataService])
], MetaDataController);
//# sourceMappingURL=meta.controller.js.map