"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const express_1 = require("express");
const morgan = require("morgan");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const filters_1 = require("./core/filters");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    app.enableCors();
    app.use(morgan('dev'));
    app.setGlobalPrefix('api/v1');
    app.use((0, express_1.json)({ limit: '50mb' }));
    app.useGlobalFilters(new filters_1.CustomeExceptionsFilter());
    app.useGlobalPipes(new common_1.ValidationPipe({
        skipMissingProperties: false,
        skipNullProperties: false,
        skipUndefinedProperties: false,
        forbidNonWhitelisted: false,
        forbidUnknownValues: false,
    }));
    await app.listen(config.get('PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map