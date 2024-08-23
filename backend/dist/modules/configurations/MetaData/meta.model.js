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
exports.MetaData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const type_enum_1 = require("./dto/type.enum");
let MetaData = class MetaData extends sequelize_typescript_1.Model {
};
exports.MetaData = MetaData;
__decorate([
    (0, sequelize_typescript_1.IsUUID)(4),
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
    }),
    __metadata("design:type", String)
], MetaData.prototype, "keywords", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "str", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        validate: {
            len: [1, 150],
        },
    }),
    __metadata("design:type", String)
], MetaData.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "subject", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "copyright", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "summary", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "classification", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "author", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "owner", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "url", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "pageName", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "category", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "subtitle", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "replyTo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM,
        values: Object.values(type_enum_1.MetaDataType),
    }),
    __metadata("design:type", String)
], MetaData.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(false),
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], MetaData.prototype, "isRefrenced", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], MetaData.prototype, "slug", void 0);
exports.MetaData = MetaData = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'meta-data',
    })
], MetaData);
//# sourceMappingURL=meta.model.js.map