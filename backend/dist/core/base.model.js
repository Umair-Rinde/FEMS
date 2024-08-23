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
exports.MyBaseModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const type_enum_1 = require("../modules/configurations/MetaData/dto/type.enum");
const meta_model_1 = require("../modules/configurations/MetaData/meta.model");
class MyBaseModel extends sequelize_typescript_1.Model {
    static async generateSlug(baseModel) {
        baseModel.slug = this.toSlugFormat(baseModel.slug);
    }
    static toSlugFormat(str) {
        if (str)
            return str
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
                .replace(/\s+/g, '-')
                .replace(/--+/g, '-')
                .replace(/[^\w\s-]/g, '')
                .trim();
    }
    static async createMetaData(baseModel) {
        try {
            const metaData = await meta_model_1.MetaData.create({ type: baseModel.type });
            baseModel.metaID = metaData.id;
            baseModel.slug = this.toSlugFormat(baseModel.slug);
            await baseModel.save();
        }
        catch (error) {
            console.error('Error creating MetaData:', error);
            throw error;
        }
    }
    static async updateMetaData(baseModel) {
        try {
            baseModel.slug = this.toSlugFormat(baseModel.slug);
            await meta_model_1.MetaData.update({ type: baseModel.type }, { where: { id: baseModel.metaID } });
        }
        catch (error) {
            console.error('Error creating MetaData:', error);
            throw error;
        }
    }
    static async createOrUpdateMetaData(baseModel) {
        try {
            const metaData = await meta_model_1.MetaData.findOne({
                where: { id: baseModel.metaID },
            });
            if (!metaData) {
                await meta_model_1.MetaData.create({ type: baseModel.type }).then((createdMetaData) => {
                    baseModel.metaID = createdMetaData.id;
                    return baseModel.save();
                });
            }
            else {
                await meta_model_1.MetaData.update({ type: baseModel.type }, { where: { id: baseModel.metaID } });
            }
        }
        catch (error) {
            console.error('Error creating/updating MetaData:', error);
            throw error;
        }
    }
}
exports.MyBaseModel = MyBaseModel;
__decorate([
    (0, sequelize_typescript_1.IsUUID)(4),
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MyBaseModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => meta_model_1.MetaData, {
        onUpdate: 'cascade',
        onDelete: 'cascade',
    }),
    __metadata("design:type", meta_model_1.MetaData)
], MyBaseModel.prototype, "metaData", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => meta_model_1.MetaData),
    __metadata("design:type", String)
], MyBaseModel.prototype, "metaID", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(null),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.VIRTUAL,
    }),
    __metadata("design:type", String)
], MyBaseModel.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        unique: true,
    }),
    __metadata("design:type", String)
], MyBaseModel.prototype, "slug", void 0);
__decorate([
    sequelize_typescript_1.BeforeSave,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MyBaseModel]),
    __metadata("design:returntype", Promise)
], MyBaseModel, "generateSlug", null);
__decorate([
    sequelize_typescript_1.AfterCreate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MyBaseModel]),
    __metadata("design:returntype", Promise)
], MyBaseModel, "createMetaData", null);
__decorate([
    sequelize_typescript_1.AfterUpdate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MyBaseModel]),
    __metadata("design:returntype", Promise)
], MyBaseModel, "updateMetaData", null);
//# sourceMappingURL=base.model.js.map