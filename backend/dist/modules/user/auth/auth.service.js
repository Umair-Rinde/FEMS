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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("../users/models/user.model");
const jwt_1 = require("@nestjs/jwt");
const sequelize_1 = require("@nestjs/sequelize");
const helpers_1 = require("../../../core/helpers");
const modules_1 = require("../../../common/modules");
let AuthService = class AuthService {
    constructor(user, jwtService, mailsService) {
        this.user = user;
        this.jwtService = jwtService;
        this.mailsService = mailsService;
    }
    async login(loginUser) {
        const data = await this.user.findOne({
            where: {
                email: loginUser.email,
            },
        });
        let user = data || null;
        if (!user)
            throw new common_1.UnauthorizedException();
        if (!(await helpers_1.bcrypt.compare(user.password, loginUser.password)))
            throw new common_1.UnauthorizedException();
        const jwt = await this.jwtService.signAsync({
            id: user.id,
        });
        user.password = undefined;
        return { user, token: jwt };
    }
    async getForgetPasswordOTP(data) {
        const user = await this.user.findOne({
            where: {
                email: data.email,
            },
        });
        if (!user)
            throw new common_1.NotFoundException("Can't find user with this email!");
        let otp = Math.floor(100000 + Math.random() * 900000);
        this.mailsService.SendOTP({
            to: user.email,
            subject: 'Reset Your Password - One-Time Password (OTP) Verification',
            context: {
                email: user.email,
                otp,
                name: user.name,
            },
        });
        const jwtToken = await this.jwtService.signAsync({
            otp,
            createdAt: new Date(),
        });
        return { otp: jwtToken };
    }
    async verifyOTP(data) {
        const user = await this.user.findOne({
            where: {
                email: data.email,
            },
        });
        if (!user)
            throw new common_1.NotFoundException("Can't find user with this email!");
        const token = await this.jwtService.decode(data.token);
        const otpGenerationDate = new Date(token.createdAt);
        const currentDate = new Date();
        const timeDifference = currentDate - otpGenerationDate;
        if (timeDifference / 60000 > 10) {
            return { valid: false };
        }
        else {
            if (+data.otp === token.otp) {
                return { valid: true };
            }
            else {
                return { valid: false };
            }
        }
    }
    async changePassword(data) {
        const user = await this.user.findOne({
            where: {
                email: data.email,
            },
        });
        if (!user)
            throw new common_1.NotFoundException("Can't find user with this email!");
        let password = await helpers_1.bcrypt.createHash(data.password);
        await this.user.update({
            password,
        }, { where: { email: data.email } });
        return user;
    }
    async getUser(payload) {
        const user = await this.user.findOne({
            where: {
                id: payload.id,
            },
            attributes: {
                exclude: ['password'],
            },
        });
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        modules_1.MailsService])
], AuthService);
//# sourceMappingURL=auth.service.js.map