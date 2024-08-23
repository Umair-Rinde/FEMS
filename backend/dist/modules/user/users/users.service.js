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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./models/user.model");
const helpers_1 = require("../../../core/helpers");
const user_role_enum_1 = require("./dtos/user-role.enum");
const Excel = require("exceljs");
const fs_1 = require("fs");
const path_1 = require("path");
const modules_1 = require("../../../core/modules");
const sequelize_1 = require("@nestjs/sequelize");
let UsersService = class UsersService extends (0, modules_1.GenericService)({}) {
    constructor(user, reqParams) {
        super(user, reqParams);
        this.user = user;
        this.reqParams = reqParams;
    }
    async create(dto) {
        let password = await helpers_1.bcrypt.createHash(dto.password);
        return super.create({ ...dto, password });
    }
    update(data, id) {
        delete data.password;
        return super.update(data, id);
    }
    getUserByEmail(email) {
        return this.user.findOne({
            where: {
                email,
            },
        });
    }
    async downloadSampleFile() {
        const workbook = new Excel.Workbook();
        const sheet = workbook.addWorksheet('Users', {});
        sheet.columns = [
            {
                header: 'User Name',
                key: 'name',
                width: 30,
            },
            {
                header: 'User Email',
                key: 'email',
                width: 30,
            },
            {
                header: 'Contact Number',
                key: 'contactNumber',
                width: 30,
            },
            {
                header: 'Role',
                key: 'role',
                width: 30,
            },
        ];
        sheet.dataValidations.add('D2:D9999', {
            type: 'list',
            allowBlank: false,
            formulae: [`"${Object.values(user_role_enum_1.RoleEnum).join(',')}"`],
            showErrorMessage: true,
            errorStyle: 'error',
            error: 'Enter the correct uom',
        });
        await workbook.xlsx.writeFile('public/temp/sample-excels/sample-user-excel.xlsx');
        return '/temp/sample-excels/sample-user-excel.xlsx';
    }
    async uploadFile(payload) {
        let columns = {};
        let password = await helpers_1.bcrypt.createHash('1234');
        const workbook = new Excel.Workbook();
        await workbook.xlsx.readFile(payload.file.path);
        let sheet = workbook.getWorksheet('Users');
        let data = [];
        if (!sheet)
            throw new common_1.BadRequestException('Please download sample excel and use the same');
        let rowsCount = 0;
        const rs = sheet.getColumn(1);
        rs.eachCell(() => {
            rowsCount++;
        });
        const columnsRow = sheet.getRow(1);
        let excludeColumnValues = ['<1 empty item>'];
        let baseColumns = ['User Name', 'User Email', 'Contact Number', 'Role'];
        columnsRow.values.forEach((item, index) => {
            if (!excludeColumnValues.includes(item)) {
                columns[index] = item;
            }
        });
        let columnsMap = {
            'User Name': 'name',
            'User Email': 'email',
            'Contact Number': 'contactNumber',
            Role: 'role',
        };
        let rows = sheet.getRows(2, rowsCount).values();
        for (let row of rows) {
            if (row.values.length) {
                let obj = { rowNumber: row.number, password };
                row.eachCell((cell, cn) => {
                    if (baseColumns.includes(columns[cn])) {
                        if (cell.value['text']) {
                            obj[columnsMap[columns[cn]]] = cell.value.text;
                        }
                        else {
                            obj[columnsMap[columns[cn]]] = cell.value;
                        }
                    }
                });
                if (Object.values(obj).length) {
                    if (!obj['name'] ||
                        !obj['email'] ||
                        !obj['role'] ||
                        !obj['contactNumber']) {
                        throw new common_1.BadRequestException(`Please add all fields from sample excel, please see row number ${obj.rowNumber}`);
                    }
                    if (!Object.values(user_role_enum_1.RoleEnum).includes(obj['role'])) {
                        throw new common_1.BadRequestException(`Please select roles from options only, please see row number ${obj.rowNumber}`);
                    }
                    let email = this.validateEmail(obj['email']);
                    if (email) {
                        throw new common_1.BadRequestException(`${email}, please see row number ${obj.rowNumber}`);
                    }
                    data.push({
                        ...obj,
                    });
                }
            }
        }
        await this.user.create(data);
        (0, fs_1.unlink)((0, path_1.join)(process.cwd(), '/public', payload.file.path), (err) => {
            if (err) {
                console.log(err);
            }
            console.log('File Deleted successfully.');
        });
        return 'Users uploaded successfully';
    }
    validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return null;
        }
        return 'You have entered an invalid email address';
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, modules_1.RequestParamsService])
], UsersService);
//# sourceMappingURL=users.service.js.map