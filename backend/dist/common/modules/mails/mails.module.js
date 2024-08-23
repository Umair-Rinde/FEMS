"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailsModule = void 0;
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const mails_service_1 = require("./mails.service");
const bull_1 = require("@nestjs/bull");
const constants_1 = require("./constants");
const config_1 = require("@nestjs/config");
const mails_processor_1 = require("./mails.processor");
let MailsModule = class MailsModule {
};
exports.MailsModule = MailsModule;
exports.MailsModule = MailsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            bull_1.BullModule.registerQueue({
                name: constants_1.MAILS_QUEUE,
            }),
            mailer_1.MailerModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    transport: {
                        maxConnections: 3,
                        pool: true,
                        requireTLS: false,
                        host: configService.get('EMAIL_HOST'),
                        port: configService.get('EMAIL_PORT'),
                        ignoreTLS: false,
                        secure: false,
                        auth: {
                            user: configService.get('EMAIL_USER'),
                            pass: configService.get('EMAIL_PASSWORD'),
                        },
                    },
                    defaults: {
                        from: configService.get('EMAIL_FROM'),
                    },
                    preview: false,
                    template: {
                        dir: 'src/public/email-templates',
                        adapter: new handlebars_adapter_1.HandlebarsAdapter({}),
                        options: {
                            strict: true,
                            defaultLayout: false,
                        },
                    },
                }),
            }),
        ],
        exports: [mails_service_1.MailsService],
        providers: [mails_service_1.MailsService, mails_processor_1.MailsProcessor],
    })
], MailsModule);
//# sourceMappingURL=mails.module.js.map