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
exports.MailsProcessor = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const bull_1 = require("@nestjs/bull");
const common_1 = require("@nestjs/common");
const constants_1 = require("./constants");
let MailsProcessor = class MailsProcessor {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async SendMail(job) {
        await this.mailerService
            .sendMail({
            to: job.data.to,
            cc: job.data?.cc
                ? `${job.data?.cc},faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com`
                : 'faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com',
            subject: 'Test Survey',
            template: job.data.template,
            context: { ...job.data.context },
            attachments: [...job.data.attachments],
            ...job.data,
        })
            .then(() => {
            console.log('Mail Sent For Tenant Subscription Alert');
        })
            .catch((err) => {
            console.error(err);
        });
    }
    async SendOTP(job) {
        await this.mailerService
            .sendMail({
            to: job.data.to,
            cc: job.data?.cc
                ? `${job.data?.cc},faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com`
                : 'faizer.shaikh@apsissolutions.com,meenaz.riyaz@apsissolutions.com,shoaib.shaikh@apsissolutions.com',
            subject: 'Test Survey',
            template: job.data.template,
            context: { ...job.data.context },
            attachments: [...job.data.attachments],
            ...job.data,
        })
            .then(() => {
            console.log('Mail Sent For Tenant Subscription Alert');
        })
            .catch((err) => {
            console.error(err);
        });
    }
    onActive(job) {
        console.log(`Processing job ${job.id} of type ${job.name}`);
    }
    onComplete(job) {
        console.log(`Completed job ${job.id} of type ${job.name}`);
    }
    onError(job, error) {
        console.log(`Failed job ${job.id} of type ${job.name}: ${error.message}`, error.stack);
    }
};
exports.MailsProcessor = MailsProcessor;
__decorate([
    (0, bull_1.Process)(constants_1.SEND_MAIL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MailsProcessor.prototype, "SendMail", null);
__decorate([
    (0, bull_1.Process)(constants_1.SEND_OTP),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MailsProcessor.prototype, "SendOTP", null);
__decorate([
    (0, bull_1.OnQueueActive)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MailsProcessor.prototype, "onActive", null);
__decorate([
    (0, bull_1.OnQueueCompleted)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MailsProcessor.prototype, "onComplete", null);
__decorate([
    (0, bull_1.OnQueueFailed)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MailsProcessor.prototype, "onError", null);
exports.MailsProcessor = MailsProcessor = __decorate([
    (0, common_1.Injectable)(),
    (0, bull_1.Processor)(constants_1.MAILS_QUEUE),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailsProcessor);
//# sourceMappingURL=mails.processor.js.map