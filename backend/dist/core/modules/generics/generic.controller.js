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
exports.GenericController = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const types_1 = require("./types");
function GenericController({ createObjDTO, updateObjDTO, notAllowedMethods = [], }) {
    class GenericClass {
        constructor(service) {
            this.service = service;
        }
        async createObj(body) {
            this.validateMethod(types_1.methodOptions.create);
            const obj = await this.validateData(body, createObjDTO);
            return this.service?.create(obj || body);
        }
        getAllObj() {
            this.validateMethod(types_1.methodOptions.getAll);
            return this.service?.getAll({});
        }
        async seedData() {
            this.validateMethod(types_1.methodOptions.seedData);
            return this.service?.seedData();
        }
        async getOneBySlug(slug) {
            this.validateMethod(types_1.methodOptions.getOneByslug);
            return this.service?.getOneBySlug(slug);
        }
        getOneObj(id) {
            this.validateMethod(types_1.methodOptions.getOne);
            return this.service?.getOne(id);
        }
        async updateObj(body, id) {
            this.validateMethod(types_1.methodOptions.update);
            const obj = await this.validateData(body, updateObjDTO);
            return this.service?.update(obj || body, id);
        }
        deleteObj(id) {
            this.validateMethod(types_1.methodOptions.delete);
            return this.service?.delete(id);
        }
        validateMethod(name) {
            if (notAllowedMethods.includes(name))
                throw new common_1.NotFoundException();
        }
        async validateData(body, dto) {
            let obj;
            console.log(body, dto);
            if (dto) {
                obj = (0, class_transformer_1.plainToClass)(dto, body);
                const errors = await (0, class_validator_1.validate)(obj, { whitelist: true });
                let message = [];
                if (errors.length) {
                    errors.forEach((err) => {
                        message = [...message, ...Object.values(err.constraints)];
                    });
                    throw new common_1.BadRequestException(message);
                }
                return obj;
            }
            return null;
        }
    }
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], GenericClass.prototype, "createObj", null);
    __decorate([
        (0, common_1.Get)(),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GenericClass.prototype, "getAllObj", null);
    __decorate([
        (0, common_1.Post)('/seed'),
        (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], GenericClass.prototype, "seedData", null);
    __decorate([
        (0, common_1.Get)('slug/:slug'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        __param(0, (0, common_1.Param)('slug')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], GenericClass.prototype, "getOneBySlug", null);
    __decorate([
        (0, common_1.Get)(':id'),
        (0, common_1.HttpCode)(common_1.HttpStatus.OK),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GenericClass.prototype, "getOneObj", null);
    __decorate([
        (0, common_1.Put)(':id'),
        (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], GenericClass.prototype, "updateObj", null);
    __decorate([
        (0, common_1.Delete)(':id'),
        (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
        __param(0, (0, common_1.Param)('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], GenericClass.prototype, "deleteObj", null);
    return GenericClass;
}
exports.GenericController = GenericController;
//# sourceMappingURL=generic.controller.js.map