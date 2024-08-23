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
exports.CustomeExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let CustomeExceptionsFilter = class CustomeExceptionsFilter {
    constructor() {
        this.logger = new common_1.Logger();
    }
    catch(exception, host) {
        let message = exception?.message || 'Something went wrong!';
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        let statusCode = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : exception.statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        if (statusCode === 404) {
            message = '404 Not Found - Invalid URL or Invalid Method called';
        }
        else {
            if (exception.response) {
                message = exception.response.message;
            }
            if (!request.url.startsWith('/media/tenant/')) {
                console.log(exception);
            }
            if (exception.errors) {
                message = exception.errors.map((err) => err.message);
            }
            if (exception?.name === 'SequelizeValidationError') {
                statusCode = common_1.HttpStatus.BAD_REQUEST;
                message = exception.errors.map((err) => err.message);
            }
            else if (exception?.name === 'SequelizeForeignKeyConstraintError') {
                statusCode = common_1.HttpStatus.BAD_REQUEST;
                message = `Invalid ID for foregion ${exception.parent.detail
                    .split('=')[0]
                    .replace(/\(|\)/g, '')} in ${exception.parent.table} table`;
            }
            else if (exception &&
                exception?.name === 'SequelizeUniqueConstraintError') {
                statusCode = common_1.HttpStatus.BAD_REQUEST;
                message = exception.errors.map((err) => err.message);
            }
        }
        const logBody = {
            statusCode,
            path: request.url,
            method: request.method,
            errorName: exception?.name,
            message: message,
        };
        const responseBody = {
            status: statusCode,
            success: false,
            message,
        };
        if (!request.url.startsWith('/media/')) {
            this.logger.error(`Request Method : ${request.method} | Request Path : ${request.url} | Error : ${JSON.stringify(logBody)}`);
        }
        return response.status(statusCode).json(responseBody);
    }
};
exports.CustomeExceptionsFilter = CustomeExceptionsFilter;
exports.CustomeExceptionsFilter = CustomeExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [])
], CustomeExceptionsFilter);
//# sourceMappingURL=custome-exceptions.filter.js.map