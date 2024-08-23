"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericService = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../helpers");
function GenericService(defaultOptions) {
    return class {
        constructor(model, reqParam) {
            this.model = model;
            this.reqParam = reqParam;
            this.options = defaultOptions;
        }
        getOrder() {
            return [
                {
                    $sort: {
                        createdAt: -1,
                    },
                },
            ];
        }
        async create(dto) {
            const data = await this.model.create(dto);
            return data;
        }
        async update(data, id) {
            const obj = await this.getOneObj(id);
            await obj.update({
                ...data,
            });
            return obj;
        }
        async getAll(findOptions = {}, orderBy = []) {
            let where = {
                ...(defaultOptions.defaultFindOptions &&
                    defaultOptions.defaultFindOptions
                    ? defaultOptions.defaultFindOptions.where
                    : {}),
                ...(findOptions && findOptions.where ? findOptions.where : {}),
            };
            if (this.reqParam.query) {
                where = {
                    ...where,
                    ...(0, helpers_1.getSearchObject)(this.reqParam.query, defaultOptions.searchFields),
                };
            }
            let options = {
                ...defaultOptions.defaultFindOptions,
                ...findOptions,
                ...this.reqParam.pagination,
                include: defaultOptions.includes,
                subQuery: false,
                distinct: true,
                where,
            };
            const data = await this.model.findAndCountAll(options);
            return data;
        }
        async getOneBySlug(slug) {
            const data = await this.getobjslug(slug, true);
            return data;
        }
        async getobjslug(slug, isJoin) {
            const where = { slug };
            return await this.getOneObj({ where }, isJoin);
        }
        async getOne(id) {
            const data = await this.getOneObj(id, true);
            return data;
        }
        async delete(id) {
            const obj = await this.getOneObj(id);
            await obj.destroy();
            return true;
        }
        async getOneObj(options, isJoin = false) {
            let findOptions = {};
            if (typeof options === 'string') {
                findOptions = {
                    ...defaultOptions.defaultFindOptions,
                    where: {
                        ...(defaultOptions.defaultFindOptions
                            ? defaultOptions.defaultFindOptions.where || {}
                            : {}),
                        id: options,
                    },
                };
            }
            else {
                findOptions = {
                    where: {
                        ...(defaultOptions.defaultFindOptions
                            ? defaultOptions.defaultFindOptions.where || {}
                            : {}),
                        ...options.where,
                    },
                    ...options,
                };
            }
            const obj = await this.model.findOne({
                ...findOptions,
                include: isJoin ? defaultOptions.includes : [],
            });
            if (!obj) {
                throw new common_1.NotFoundException(`${this.model.name} not found!`);
            }
            return obj;
        }
        async seedData() {
            if (defaultOptions.seedData) {
                await this.model.bulkCreate(defaultOptions.seedData);
            }
            return 'Migration completed';
        }
    };
}
exports.GenericService = GenericService;
//# sourceMappingURL=generic.service.js.map