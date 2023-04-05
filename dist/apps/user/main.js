/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/dto/user.dto.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetVehicleListQuery = exports.CreateVehicleDto = exports.UpdateProfileDto = exports.GetProfileParams = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const class_transformer_1 = __webpack_require__("class-transformer");
const class_validator_1 = __webpack_require__("class-validator");
const mongoose_1 = __webpack_require__("mongoose");
class GetProfileParams {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'accountId',
        example: new mongoose_1.Types.ObjectId(),
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetProfileParams.prototype, "accountId", void 0);
exports.GetProfileParams = GetProfileParams;
class UpdateMobileDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'countryCode',
        example: '+66',
        description: 'This is a optional property',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMobileDto.prototype, "countryCode", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'number',
        example: '999999999',
        description: 'This is a optional property',
        required: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    tslib_1.__metadata("design:type", String)
], UpdateMobileDto.prototype, "number", void 0);
class UpdateProfileDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'email',
        example: 'test@example.com',
        description: 'This is a optional property',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    tslib_1.__metadata("design:type", String)
], UpdateProfileDto.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'displayName',
        example: 'test1@example.com',
        description: 'This is a optional property',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], UpdateProfileDto.prototype, "displayName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'mobile',
        examples: UpdateMobileDto,
        description: 'This is a optional property',
        required: true,
        type: UpdateMobileDto,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsObject)(),
    tslib_1.__metadata("design:type", Object)
], UpdateProfileDto.prototype, "mobile", void 0);
exports.UpdateProfileDto = UpdateProfileDto;
class CreateVehicleDto {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'insureId',
        example: new mongoose_1.Types.ObjectId(),
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateVehicleDto.prototype, "insureId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'brand',
        example: 'honda',
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateVehicleDto.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'model',
        example: 'civic',
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateVehicleDto.prototype, "model", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'vehicleRegistration',
        example: 'กข-1111',
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateVehicleDto.prototype, "vehicleRegistration", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'registrationProvince',
        example: 'chiang_mai',
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateVehicleDto.prototype, "registrationProvince", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'registrationCountry',
        example: 'thailand',
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateVehicleDto.prototype, "registrationCountry", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'expiredYear',
        example: 2025,
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], CreateVehicleDto.prototype, "expiredYear", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'insureRangeAmount',
        example: 2000.69,
        description: 'This is a optional property',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], CreateVehicleDto.prototype, "insureRangeAmount", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'image',
        example: null,
        description: 'This is a optional property',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => String),
    tslib_1.__metadata("design:type", String)
], CreateVehicleDto.prototype, "image", void 0);
exports.CreateVehicleDto = CreateVehicleDto;
class GetVehicleListQuery {
}
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'search',
        example: '',
        description: 'This is a optional property',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], GetVehicleListQuery.prototype, "search", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'skip',
        example: '',
        description: 'This is a optional property',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], GetVehicleListQuery.prototype, "skip", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'limit',
        example: 5,
        description: 'This is a required property',
        required: true,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(5),
    (0, class_validator_1.Max)(25),
    (0, class_transformer_1.Type)(() => Number),
    tslib_1.__metadata("design:type", Number)
], GetVehicleListQuery.prototype, "limit", void 0);
exports.GetVehicleListQuery = GetVehicleListQuery;


/***/ }),

/***/ "./src/app/service/user.abstract.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
class UserService {
}
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserImpl = void 0;
const tslib_1 = __webpack_require__("tslib");
const database_1 = __webpack_require__("../../libs/database/src/index.ts");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const provider_1 = __webpack_require__("../../libs/utils/provider/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("mongoose");
let UserImpl = class UserImpl {
    constructor(repository, storage) {
        this.repository = repository;
        this.storage = storage;
    }
    getProfile(accountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const account = yield this.repository.findAccount({ id: accountId });
            if (!account) {
                throw new exception_1.MadifyException('NOT_FOUND_DATA');
            }
            return {
                email: account.email,
                displayName: account.displayName,
                mobile: account.mobile,
            };
        });
    }
    updateProfile(body, accountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const account = yield this.repository.findAccount({ id: accountId });
            if (!account) {
                throw new exception_1.MadifyException('NOT_FOUND_DATA');
            }
            account.set(body);
            yield account.save();
            return database_1.PayloadResponse.toProfileResponse(account);
        });
    }
    createVehicle(body, accountId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const vehicle = yield this.repository.createVehicle(Object.assign(Object.assign({}, body), { accountId: new mongoose_1.Types.ObjectId(accountId), visibility: database_1.EntityVisibility.Pending }));
            if (body.image)
                vehicle.imageKey = yield this.storage.uploadFile(`vehicle/${vehicle.id}/${vehicle.id}`, body.image);
            if (!vehicle)
                throw new exception_1.MadifyException('SOMETHING_WRONG');
            const image = body.image
                ? yield this.storage.generateSignedUrl(vehicle.imageKey)
                : null;
            yield vehicle.save();
            return database_1.PayloadResponse.toVehicleResponse(vehicle, { imageUrl: image });
        });
    }
    listVehicle(_a, accountId) {
        var { skip, limit } = _a, query = tslib_1.__rest(_a, ["skip", "limit"]);
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const queryOptions = {
                skip: skip,
                limit: limit,
            };
            const vehicles = yield this.repository.findVehicles(Object.assign(Object.assign({}, query), { accountId }), queryOptions);
            const vehiclesResponse = yield Promise.all(vehicles.map((vehicle) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const [image, brand, model, province] = yield Promise.all([
                    this.storage.generateSignedUrl(vehicle.imageKey),
                    this.repository.findVehicleBrand({
                        slug: vehicle.brand,
                    }),
                    this.repository.findVehicleModel({
                        slug: vehicle.model,
                    }),
                    this.repository.findProvince({
                        slug: vehicle.registrationProvince,
                    }),
                ]);
                return database_1.PayloadResponse.toVehicleResponse(vehicle, {
                    vehicleImage: image,
                    brand: brand.name,
                    model: model.name,
                    registrationProvince: province.name,
                });
            })));
            return database_1.ResponseDto.ok({
                payload: vehiclesResponse,
                meta: database_1.Meta.fromDocuments(vehicles, skip, limit),
            });
        });
    }
};
UserImpl = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(database_1.REPOSITORY_PROVIDE)),
    tslib_1.__param(1, (0, common_1.Inject)(provider_1.STORAGE_PROVIDE)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof database_1.IRepository !== "undefined" && database_1.IRepository) === "function" ? _a : Object, typeof (_b = typeof provider_1.StorageService !== "undefined" && provider_1.StorageService) === "function" ? _b : Object])
], UserImpl);
exports.UserImpl = UserImpl;


/***/ }),

/***/ "./src/app/user.controller.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const decorator_1 = __webpack_require__("../../libs/utils/decorator/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const user_dto_1 = __webpack_require__("./src/app/dto/user.dto.ts");
const user_abstract_1 = __webpack_require__("./src/app/service/user.abstract.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getProfile(auth, { accountId }) {
        auth.requestAccessForAccount(accountId);
        return this.userService.getProfile(accountId);
    }
    updateProfile(auth, { accountId }, body) {
        auth.requestAccessForAccount(accountId);
        return this.userService.updateProfile(body, accountId);
    }
    createVehicle({ account }, body) {
        return this.userService.createVehicle(body, account.id);
    }
    listVehicle({ account }, query) {
        return this.userService.listVehicle(query, account.id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(':accountId'),
    (0, decorator_1.MadifyAuthorize)(config_1.RedisCacheKey.USER),
    tslib_1.__param(0, (0, decorator_1.Auth)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof decorator_1.Authorizer !== "undefined" && decorator_1.Authorizer) === "function" ? _b : Object, typeof (_c = typeof user_dto_1.GetProfileParams !== "undefined" && user_dto_1.GetProfileParams) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], UserController.prototype, "getProfile", null);
tslib_1.__decorate([
    (0, common_1.Put)(':accountId'),
    (0, decorator_1.MadifyAuthorizeAndClearCached)(config_1.RedisCacheKey.USER),
    tslib_1.__param(0, (0, decorator_1.Auth)()),
    tslib_1.__param(1, (0, common_1.Param)()),
    tslib_1.__param(2, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof decorator_1.Authorizer !== "undefined" && decorator_1.Authorizer) === "function" ? _e : Object, typeof (_f = typeof user_dto_1.GetProfileParams !== "undefined" && user_dto_1.GetProfileParams) === "function" ? _f : Object, typeof (_g = typeof user_dto_1.UpdateProfileDto !== "undefined" && user_dto_1.UpdateProfileDto) === "function" ? _g : Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UserController.prototype, "updateProfile", null);
tslib_1.__decorate([
    (0, common_1.Post)('vehicle'),
    (0, decorator_1.MadifyAuthorizeAndClearCached)(config_1.RedisCacheKey.VEHICLE),
    tslib_1.__param(0, (0, decorator_1.Auth)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_j = typeof decorator_1.Authorizer !== "undefined" && decorator_1.Authorizer) === "function" ? _j : Object, typeof (_k = typeof user_dto_1.CreateVehicleDto !== "undefined" && user_dto_1.CreateVehicleDto) === "function" ? _k : Object]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], UserController.prototype, "createVehicle", null);
tslib_1.__decorate([
    (0, common_1.Get)('vehicle/list'),
    (0, decorator_1.MadifyAuthorize)(config_1.RedisCacheKey.VEHICLE),
    tslib_1.__param(0, (0, decorator_1.Auth)()),
    tslib_1.__param(1, (0, common_1.Query)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_m = typeof decorator_1.Authorizer !== "undefined" && decorator_1.Authorizer) === "function" ? _m : Object, typeof (_o = typeof user_dto_1.GetVehicleListQuery !== "undefined" && user_dto_1.GetVehicleListQuery) === "function" ? _o : Object]),
    tslib_1.__metadata("design:returntype", void 0)
], UserController.prototype, "listVehicle", null);
UserController = tslib_1.__decorate([
    (0, decorator_1.MadifyController)({ path: config_1.APIPrefix.USER }),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_abstract_1.UserService !== "undefined" && user_abstract_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./src/app/user.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const database_1 = __webpack_require__("../../libs/database/src/index.ts");
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const interceptor_1 = __webpack_require__("../../libs/utils/interceptor/src/index.ts");
const module_1 = __webpack_require__("../../libs/utils/module/src/index.ts");
const provider_1 = __webpack_require__("../../libs/utils/provider/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const user_abstract_1 = __webpack_require__("./src/app/service/user.abstract.ts");
const user_service_1 = __webpack_require__("./src/app/service/user.service.ts");
const user_controller_1 = __webpack_require__("./src/app/user.controller.ts");
let UserModule = class UserModule {
};
UserModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.MadifyConfigModule,
            database_1.MadifyDatabaseModule,
            module_1.MadifyJwtConfigModule,
            module_1.MadifyThrottlerModule,
            module_1.MadifyCacheModule,
            interceptor_1.MadifyUtilsInterceptorModule,
            provider_1.MadifyUtilsProviderModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            {
                provide: user_abstract_1.UserService,
                useClass: user_service_1.UserImpl,
            },
        ],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "../../libs/database/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/database.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/schema/account.schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/schema/vehicle.schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/schema/vehicle.brand.schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/schema/vehicle.model.schema.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/repository/repository.abstract.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/repository/repository.payload.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/enum/account.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/enum/base.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/enum/user.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/interface/account.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/interface/global.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/interface/redis.interface.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/database/src/lib/interface/vehicle.interface.ts"), exports);


/***/ }),

/***/ "../../libs/database/src/lib/database.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyDatabaseModule = exports.REPOSITORY_PROVIDE = void 0;
const tslib_1 = __webpack_require__("tslib");
const module_1 = __webpack_require__("../../libs/utils/module/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const repository_service_1 = __webpack_require__("../../libs/database/src/lib/repository/repository.service.ts");
const account_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/account.schema.ts");
const otp_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/otp.schema.ts");
const province_model_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/province.model.schema.ts");
const vehicle_brand_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/vehicle.brand.schema.ts");
const vehicle_model_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/vehicle.model.schema.ts");
const vehicle_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/vehicle.schema.ts");
const modelDefinitions = [
    {
        name: account_schema_1.Account.name,
        schema: account_schema_1.AccountSchema,
    },
    {
        name: vehicle_schema_1.Vehicle.name,
        schema: vehicle_schema_1.VehicleSchema,
    },
    {
        name: vehicle_brand_schema_1.VehicleBrand.name,
        schema: vehicle_brand_schema_1.VehicleBrandSchema,
    },
    {
        name: vehicle_model_schema_1.VehicleModel.name,
        schema: vehicle_model_schema_1.VehicleModelSchema,
    },
    {
        name: otp_schema_1.Otp.name,
        schema: otp_schema_1.OtpSchema,
    },
    {
        name: province_model_schema_1.Province.name,
        schema: province_model_schema_1.ProvinceSchema,
    },
];
exports.REPOSITORY_PROVIDE = 'repository';
let MadifyDatabaseModule = class MadifyDatabaseModule {
};
MadifyDatabaseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [module_1.MadifyMongooseModule, mongoose_1.MongooseModule.forFeature(modelDefinitions)],
        providers: [
            {
                provide: exports.REPOSITORY_PROVIDE,
                useClass: repository_service_1.RepositoryImpl,
            },
        ],
        exports: [exports.REPOSITORY_PROVIDE],
    })
], MadifyDatabaseModule);
exports.MadifyDatabaseModule = MadifyDatabaseModule;


/***/ }),

/***/ "../../libs/database/src/lib/enum/account.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Objective = void 0;
var Objective;
(function (Objective) {
    Objective["Verify"] = "verify";
    Objective["ForgotPassword"] = "forgot-password";
})(Objective = exports.Objective || (exports.Objective = {}));


/***/ }),

/***/ "../../libs/database/src/lib/enum/base.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sorting = exports.EntityVisibility = void 0;
var EntityVisibility;
(function (EntityVisibility) {
    EntityVisibility["Hidden"] = "hidden";
    EntityVisibility["Publish"] = "publish";
    EntityVisibility["Pending"] = "pending";
    EntityVisibility["Deleted"] = "deleted";
})(EntityVisibility = exports.EntityVisibility || (exports.EntityVisibility = {}));
var Sorting;
(function (Sorting) {
    Sorting["ASC"] = "asc";
    Sorting["DESC"] = "desc";
})(Sorting = exports.Sorting || (exports.Sorting = {}));


/***/ }),

/***/ "../../libs/database/src/lib/enum/user.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AcceptPlatform = void 0;
var AcceptPlatform;
(function (AcceptPlatform) {
    AcceptPlatform["IOS"] = "ios";
    AcceptPlatform["Android"] = "android";
    AcceptPlatform["Web"] = "web";
})(AcceptPlatform = exports.AcceptPlatform || (exports.AcceptPlatform = {}));


/***/ }),

/***/ "../../libs/database/src/lib/interface/account.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IRegisterFirebase = void 0;
class IRegisterFirebase {
}
exports.IRegisterFirebase = IRegisterFirebase;


/***/ }),

/***/ "../../libs/database/src/lib/interface/global.interface.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestMetadata = exports.ResponseDto = exports.Meta = void 0;
const tslib_1 = __webpack_require__("tslib");
const swagger_1 = __webpack_require__("@nestjs/swagger");
class Meta {
}
Meta.fromDocuments = (documents, skip, limit, resultTotal) => {
    return {
        previous: skip,
        next: (skip !== null && skip !== void 0 ? skip : 0) + limit,
        resultCount: documents.length,
        resultTotal,
    };
};
exports.Meta = Meta;
class ResponseDto {
}
ResponseDto.ok = ({ meta, payload }) => {
    var _a;
    const responseDto = new ResponseDto();
    responseDto.payload = payload;
    (_a = responseDto.meta) !== null && _a !== void 0 ? _a : (responseDto.meta = meta);
    return responseDto;
};
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Object)
], ResponseDto.prototype, "payload", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Meta)
], ResponseDto.prototype, "meta", void 0);
exports.ResponseDto = ResponseDto;
class RequestMetadata {
}
exports.RequestMetadata = RequestMetadata;


/***/ }),

/***/ "../../libs/database/src/lib/interface/redis.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/database/src/lib/interface/vehicle.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/database/src/lib/repository/repository.abstract.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IRepository = void 0;
class IRepository {
}
exports.IRepository = IRepository;


/***/ }),

/***/ "../../libs/database/src/lib/repository/repository.payload.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayloadResponse = void 0;
class PayloadResponse {
    static toVehicleResponse(vehicle, options) {
        return Object.assign({ brand: vehicle.brand, model: vehicle.model, vehicleRegistration: vehicle.vehicleRegistration, registrationProvince: vehicle.registrationProvince }, options);
    }
    static toProfileResponse(account) {
        return {
            email: account.email,
            displayName: account.displayName,
            mobile: account.mobile,
        };
    }
}
exports.PayloadResponse = PayloadResponse;


/***/ }),

/***/ "../../libs/database/src/lib/repository/repository.query.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrepareQuery = void 0;
const mongoose_1 = __webpack_require__("mongoose");
class PrepareQuery {
    findAccountFilters(query) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const filters = {};
        if (query === null || query === void 0 ? void 0 : query.email)
            filters.email = query.email;
        if (query === null || query === void 0 ? void 0 : query.id)
            filters._id = new mongoose_1.Types.ObjectId(String(query.id));
        if ((_a = query === null || query === void 0 ? void 0 : query.credentials) === null || _a === void 0 ? void 0 : _a.accessToken)
            filters['credentials.accessToken'] = (_b = query.credentials) === null || _b === void 0 ? void 0 : _b.accessToken;
        if ((_c = query === null || query === void 0 ? void 0 : query.credentials) === null || _c === void 0 ? void 0 : _c.accessTokenExpiration)
            filters['credentials.accessTokenExpiration'] =
                (_d = query.credentials) === null || _d === void 0 ? void 0 : _d.accessTokenExpiration;
        if ((_e = query === null || query === void 0 ? void 0 : query.credentials) === null || _e === void 0 ? void 0 : _e.refreshToken)
            filters['credentials.refreshToken'] = (_f = query.credentials) === null || _f === void 0 ? void 0 : _f.refreshToken;
        if ((_g = query === null || query === void 0 ? void 0 : query.credentials) === null || _g === void 0 ? void 0 : _g.refreshTokenExpiration)
            filters['credentials.refreshTokenExpiration'] =
                (_h = query.credentials) === null || _h === void 0 ? void 0 : _h.refreshTokenExpiration;
        if ((_j = query === null || query === void 0 ? void 0 : query.credentials) === null || _j === void 0 ? void 0 : _j.platform)
            filters['credentials.platform'] = (_k = query === null || query === void 0 ? void 0 : query.credentials) === null || _k === void 0 ? void 0 : _k.platform;
        if ((_l = query === null || query === void 0 ? void 0 : query.credentials) === null || _l === void 0 ? void 0 : _l.uuid)
            filters['credentials.uuid'] = (_m = query === null || query === void 0 ? void 0 : query.credentials) === null || _m === void 0 ? void 0 : _m.uuid;
        if (query === null || query === void 0 ? void 0 : query.visibility)
            filters.visibility = query.visibility;
        if ((_o = query === null || query === void 0 ? void 0 : query.devices) === null || _o === void 0 ? void 0 : _o.uuid)
            filters['devices.uuid'] = query.devices.uuid;
        if ((_p = query === null || query === void 0 ? void 0 : query.devices) === null || _p === void 0 ? void 0 : _p.platform)
            filters['devices.platform'] = query.devices.platform;
        return filters;
    }
    findVehicleFilters(query) {
        const filters = {};
        if (query === null || query === void 0 ? void 0 : query.search)
            filters.$text = { $search: query.search };
        if (query === null || query === void 0 ? void 0 : query.id)
            filters._id = new mongoose_1.Types.ObjectId(String(query.id));
        if (query === null || query === void 0 ? void 0 : query.visibility)
            filters.visibility = query.visibility;
        if (query === null || query === void 0 ? void 0 : query.accountId)
            filters.accountId = new mongoose_1.Types.ObjectId(String(query.accountId));
        if (query === null || query === void 0 ? void 0 : query.insureId)
            filters.insureId = new mongoose_1.Types.ObjectId(String(query.insureId));
        if (query === null || query === void 0 ? void 0 : query.brand)
            filters.brand = query.brand;
        if (query === null || query === void 0 ? void 0 : query.model)
            filters.model = query.model;
        if (query === null || query === void 0 ? void 0 : query.expiredYear)
            filters.expiredYear = query.expiredYear;
        if (query === null || query === void 0 ? void 0 : query.vehicleRegistration)
            filters.vehicleRegistration = query.vehicleRegistration;
        if (query === null || query === void 0 ? void 0 : query.registrationProvince)
            filters.registrationProvince = query.registrationProvince;
        if (query === null || query === void 0 ? void 0 : query.registrationCountry)
            filters.registrationCountry = query.registrationCountry;
        if (query === null || query === void 0 ? void 0 : query.insureRangeAmount)
            filters.insureRangeAmount = query.insureRangeAmount;
        return filters;
    }
    findVehicleBrandFilters(query) {
        var _a, _b;
        const filters = {};
        if (query === null || query === void 0 ? void 0 : query.id)
            filters._id = new mongoose_1.Types.ObjectId(String(query.id));
        if ((_a = query === null || query === void 0 ? void 0 : query.name) === null || _a === void 0 ? void 0 : _a.th)
            filters['name.th'] = query.name.th;
        if ((_b = query === null || query === void 0 ? void 0 : query.name) === null || _b === void 0 ? void 0 : _b.en)
            filters['name.en'] = query.name.en;
        if (query === null || query === void 0 ? void 0 : query.slug)
            filters.slug = query.slug;
        return filters;
    }
    findVehicleModelFilters(query) {
        var _a, _b;
        const filters = {};
        if (query === null || query === void 0 ? void 0 : query.id)
            filters._id = new mongoose_1.Types.ObjectId(String(query.id));
        if ((_a = query === null || query === void 0 ? void 0 : query.name) === null || _a === void 0 ? void 0 : _a.th)
            filters['name.th'] = query.name.th;
        if ((_b = query === null || query === void 0 ? void 0 : query.name) === null || _b === void 0 ? void 0 : _b.en)
            filters['name.en'] = query.name.en;
        if (query === null || query === void 0 ? void 0 : query.slug)
            filters.slug = query.slug;
        if (query === null || query === void 0 ? void 0 : query.brand)
            filters.brand = query.brand;
        return filters;
    }
    findProvinceFilters(query) {
        var _a, _b;
        const filters = {};
        if (query === null || query === void 0 ? void 0 : query.id)
            filters._id = new mongoose_1.Types.ObjectId(String(query.id));
        if ((_a = query === null || query === void 0 ? void 0 : query.name) === null || _a === void 0 ? void 0 : _a.th)
            filters['name.th'] = query.name.th;
        if ((_b = query === null || query === void 0 ? void 0 : query.name) === null || _b === void 0 ? void 0 : _b.en)
            filters['name.en'] = query.name.en;
        if (query === null || query === void 0 ? void 0 : query.slug)
            filters.slug = query.slug;
        return filters;
    }
}
exports.PrepareQuery = PrepareQuery;


/***/ }),

/***/ "../../libs/database/src/lib/repository/repository.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RepositoryImpl = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const account_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/account.schema.ts");
const otp_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/otp.schema.ts");
const province_model_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/province.model.schema.ts");
const vehicle_brand_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/vehicle.brand.schema.ts");
const vehicle_model_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/vehicle.model.schema.ts");
const vehicle_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/vehicle.schema.ts");
const repository_query_1 = __webpack_require__("../../libs/database/src/lib/repository/repository.query.ts");
let RepositoryImpl = class RepositoryImpl {
    constructor(accountModel, provinceModel, otpModel, vehicleModel, vehicleBrandModel, vehicleModelModel) {
        this.accountModel = accountModel;
        this.provinceModel = provinceModel;
        this.otpModel = otpModel;
        this.vehicleModel = vehicleModel;
        this.vehicleBrandModel = vehicleBrandModel;
        this.vehicleModelModel = vehicleModelModel;
        this.filters = new repository_query_1.PrepareQuery();
    }
    createAccount(account, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new this.accountModel(account).save(queryOptions);
        });
    }
    findAccount(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.accountModel
                .findOne(this.filters.findAccountFilters(query), queryOptions)
                .exec();
        });
    }
    createVehicle(vehicle, queryOptions) {
        return new this.vehicleModel(vehicle).save(queryOptions);
    }
    updateAccount(filter, updateQuery) {
        return this.accountModel
            .updateOne(this.filters.findAccountFilters(filter), updateQuery)
            .exec();
    }
    findVehicle(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.vehicleModel
                .findOne(this.filters.findVehicleFilters(query), {}, queryOptions)
                .exec();
        });
    }
    findVehicles(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.vehicleModel
                .find(this.filters.findVehicleFilters(query), {}, queryOptions)
                .exec();
        });
    }
    countVehicles(query) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.vehicleModel
                .count(this.filters.findVehicleFilters(query))
                .exec();
        });
    }
    findVehicleBrands(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.vehicleBrandModel
                .find(this.filters.findVehicleBrandFilters(query), {}, queryOptions)
                .exec();
        });
    }
    findVehicleBrand(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.vehicleBrandModel
                .findOne(this.filters.findVehicleBrandFilters(query), {}, queryOptions)
                .exec();
        });
    }
    findVehicleModels(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.vehicleModelModel
                .find(this.filters.findVehicleModelFilters(query), {}, queryOptions)
                .exec();
        });
    }
    findVehicleModel(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.vehicleModelModel
                .findOne(this.filters.findVehicleModelFilters(query), {}, queryOptions)
                .exec();
        });
    }
    findProvince(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.provinceModel
                .findOne(this.filters.findProvinceFilters(query), {}, queryOptions)
                .exec();
        });
    }
    findProvinces(query, queryOptions) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.provinceModel
                .find(this.filters.findProvinceFilters(query), {}, queryOptions)
                .exec();
        });
    }
};
RepositoryImpl = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, mongoose_1.InjectModel)(account_schema_1.Account.name)),
    tslib_1.__param(1, (0, mongoose_1.InjectModel)(province_model_schema_1.Province.name)),
    tslib_1.__param(2, (0, mongoose_1.InjectModel)(otp_schema_1.Otp.name)),
    tslib_1.__param(3, (0, mongoose_1.InjectModel)(vehicle_schema_1.Vehicle.name)),
    tslib_1.__param(4, (0, mongoose_1.InjectModel)(vehicle_brand_schema_1.VehicleBrand.name)),
    tslib_1.__param(5, (0, mongoose_1.InjectModel)(vehicle_model_schema_1.VehicleModel.name)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _e : Object, typeof (_f = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _f : Object])
], RepositoryImpl);
exports.RepositoryImpl = RepositoryImpl;


/***/ }),

/***/ "../../libs/database/src/lib/schema/account.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccountSchema = exports.Account = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const base_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/base.schema.ts");
let Credential = class Credential {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Credential.prototype, "accessToken", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Date }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Credential.prototype, "accessTokenExpiration", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Credential.prototype, "refreshToken", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Date }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Credential.prototype, "refreshTokenExpiration", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Credential.prototype, "platform", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Credential.prototype, "uuid", void 0);
Credential = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ id: false, _id: false, versionKey: false })
], Credential);
const CredentialSchema = mongoose_1.SchemaFactory.createForClass(Credential);
let Device = class Device {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "firebaseToken", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Device.prototype, "platform", void 0);
Device = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ id: false, _id: false, versionKey: false })
], Device);
const DeviceSchema = mongoose_1.SchemaFactory.createForClass(Device);
let Activation = class Activation {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Activation.prototype, "verifyToken", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Date }),
    tslib_1.__metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Activation.prototype, "verifyTokenExpireDate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Activation.prototype, "activationDate", void 0);
Activation = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ id: false, _id: false, versionKey: false })
], Activation);
const ActivationSchema = mongoose_1.SchemaFactory.createForClass(Activation);
let Authentication = class Authentication {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, unique: true }),
    tslib_1.__metadata("design:type", String)
], Authentication.prototype, "socialId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Authentication.prototype, "socialToken", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Authentication.prototype, "avatar", void 0);
Authentication = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ id: false, _id: false, versionKey: false })
], Authentication);
const AuthenticationSchema = mongoose_1.SchemaFactory.createForClass(Authentication);
let Account = class Account extends base_schema_1.BaseSchema {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, index: true, required: true, unique: true }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "email", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, required: true }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "password", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, required: true }),
    tslib_1.__metadata("design:type", String)
], Account.prototype, "displayName", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Date }),
    tslib_1.__metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Account.prototype, "activateDate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    tslib_1.__metadata("design:type", Object)
], Account.prototype, "mobile", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    tslib_1.__metadata("design:type", Object)
], Account.prototype, "geolocation", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [CredentialSchema], index: true }),
    tslib_1.__metadata("design:type", Array)
], Account.prototype, "credentials", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [AuthenticationSchema] }),
    tslib_1.__metadata("design:type", Authentication)
], Account.prototype, "authentications", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [ActivationSchema] }),
    tslib_1.__metadata("design:type", Array)
], Account.prototype, "activations", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [DeviceSchema] }),
    tslib_1.__metadata("design:type", Array)
], Account.prototype, "devices", void 0);
Account = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Account);
exports.Account = Account;
exports.AccountSchema = mongoose_1.SchemaFactory.createForClass(Account)
    .index({ email: 1 }, { background: true })
    .index({ 'authentications.socialId': 1 }, { background: true })
    .index({ 'credentials.accessToken': 1 }, { background: true })
    .index({ 'credentials.refreshToken': 1 }, { background: true })
    .index({ 'credentials.accessTokenExpiration': 1 }, { background: true })
    .index({ 'credentials.refreshExpiration': 1 }, { background: true })
    .index({ 'credentials.platform': 1 }, { background: true })
    .index({ 'credentials.uuid': 1 }, { background: true });


/***/ }),

/***/ "../../libs/database/src/lib/schema/base.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Name = exports.BaseSchema = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const base_enum_1 = __webpack_require__("../../libs/database/src/lib/enum/base.enum.ts");
let BaseSchema = class BaseSchema extends mongoose_2.Document {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Date, default: new Date() }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseSchema.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Date, default: new Date() }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseSchema.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, default: base_enum_1.EntityVisibility.Publish }),
    tslib_1.__metadata("design:type", typeof (_c = typeof base_enum_1.EntityVisibility !== "undefined" && base_enum_1.EntityVisibility) === "function" ? _c : Object)
], BaseSchema.prototype, "visibility", void 0);
BaseSchema = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ id: false, _id: false, versionKey: false })
], BaseSchema);
exports.BaseSchema = BaseSchema;
let Name = class Name {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Name.prototype, "th", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Name.prototype, "en", void 0);
Name = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ id: false, _id: false, versionKey: false })
], Name);
exports.Name = Name;


/***/ }),

/***/ "../../libs/database/src/lib/schema/otp.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OtpSchema = exports.Otp = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const base_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/base.schema.ts");
let Otp = class Otp extends base_schema_1.BaseSchema {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, index: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], Otp.prototype, "accountId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Otp.prototype, "action", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Otp.prototype, "refCode", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Date }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Otp.prototype, "expireDate", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: [mongoose_2.SchemaTypes.Date], default: [] }),
    tslib_1.__metadata("design:type", Array)
], Otp.prototype, "sentAt", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Number, default: 0 }),
    tslib_1.__metadata("design:type", Number)
], Otp.prototype, "retry", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Boolean, default: false }),
    tslib_1.__metadata("design:type", Boolean)
], Otp.prototype, "isVerify", void 0);
Otp = tslib_1.__decorate([
    (0, mongoose_1.Schema)()
], Otp);
exports.Otp = Otp;
exports.OtpSchema = mongoose_1.SchemaFactory.createForClass(Otp);


/***/ }),

/***/ "../../libs/database/src/lib/schema/province.model.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProvinceSchema = exports.Province = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const base_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/base.schema.ts");
let Province = class Province extends base_schema_1.BaseSchema {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: base_schema_1.Name, required: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof base_schema_1.Name !== "undefined" && base_schema_1.Name) === "function" ? _a : Object)
], Province.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, required: true }),
    tslib_1.__metadata("design:type", String)
], Province.prototype, "slug", void 0);
Province = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Province);
exports.Province = Province;
exports.ProvinceSchema = mongoose_1.SchemaFactory.createForClass(Province)
    .index({ name: 1 }, { background: true })
    .index({ 'name.th': 1 }, { background: true })
    .index({ 'name.en': 1 }, { background: true })
    .index({ slug: 1 }, { unique: true, background: true });


/***/ }),

/***/ "../../libs/database/src/lib/schema/vehicle.brand.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleBrandSchema = exports.VehicleBrand = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const base_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/base.schema.ts");
let VehicleBrand = class VehicleBrand extends base_schema_1.BaseSchema {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: base_schema_1.Name, required: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof base_schema_1.Name !== "undefined" && base_schema_1.Name) === "function" ? _a : Object)
], VehicleBrand.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, required: true }),
    tslib_1.__metadata("design:type", String)
], VehicleBrand.prototype, "slug", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], VehicleBrand.prototype, "imageKey", void 0);
VehicleBrand = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], VehicleBrand);
exports.VehicleBrand = VehicleBrand;
exports.VehicleBrandSchema = mongoose_1.SchemaFactory.createForClass(VehicleBrand)
    .index({ name: 1 }, { background: true })
    .index({ 'name.th': 1 }, { background: true })
    .index({ 'name.en': 1 }, { background: true })
    .index({ slug: 1 }, { unique: true, background: true });


/***/ }),

/***/ "../../libs/database/src/lib/schema/vehicle.model.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleModelSchema = exports.VehicleModel = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const base_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/base.schema.ts");
let VehicleModel = class VehicleModel extends base_schema_1.BaseSchema {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: base_schema_1.Name, required: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof base_schema_1.Name !== "undefined" && base_schema_1.Name) === "function" ? _a : Object)
], VehicleModel.prototype, "name", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, required: true }),
    tslib_1.__metadata("design:type", String)
], VehicleModel.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, required: true }),
    tslib_1.__metadata("design:type", String)
], VehicleModel.prototype, "slug", void 0);
VehicleModel = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], VehicleModel);
exports.VehicleModel = VehicleModel;
exports.VehicleModelSchema = mongoose_1.SchemaFactory.createForClass(VehicleModel)
    .index({ brand: 1 }, { background: true })
    .index({ name: 1 }, { background: true })
    .index({ 'name.th': 1 }, { background: true })
    .index({ 'name.en': 1 }, { background: true })
    .index({ slug: 1 }, { unique: true, background: true });


/***/ }),

/***/ "../../libs/database/src/lib/schema/vehicle.schema.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VehicleSchema = exports.Vehicle = void 0;
const tslib_1 = __webpack_require__("tslib");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_2 = __webpack_require__("mongoose");
const base_schema_1 = __webpack_require__("../../libs/database/src/lib/schema/base.schema.ts");
let Vehicle = class Vehicle extends base_schema_1.BaseSchema {
};
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, index: true, required: true }),
    tslib_1.__metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], Vehicle.prototype, "accountId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, index: true, required: true }),
    tslib_1.__metadata("design:type", typeof (_b = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _b : Object)
], Vehicle.prototype, "insureId", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, index: true, required: true }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "brand", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String, index: true, required: true }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "model", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Number, index: true, required: true }),
    tslib_1.__metadata("design:type", Number)
], Vehicle.prototype, "expiredYear", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.Decimal128 }),
    tslib_1.__metadata("design:type", Number)
], Vehicle.prototype, "insureRangeAmount", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, index: true, required: true }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "vehicleRegistration", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: String, index: true, required: true }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "registrationProvince", void 0);
tslib_1.__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.String }),
    tslib_1.__metadata("design:type", String)
], Vehicle.prototype, "imageKey", void 0);
Vehicle = tslib_1.__decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Vehicle);
exports.Vehicle = Vehicle;
exports.VehicleSchema = mongoose_1.SchemaFactory.createForClass(Vehicle)
    .index({ accountId: 1 }, { background: true })
    .index({ insureId: 1 }, { background: true })
    .index({
    brand: 'text',
    model: 'text',
    vehicleRegistration: 'text',
    registrationProvince: 'text',
}, { background: true });


/***/ }),

/***/ "../../libs/utils/common/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/common/src/lib/logger.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/common/src/lib/hash.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/common/src/lib/helmet.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/common/src/lib/documentation.ts"), exports);


/***/ }),

/***/ "../../libs/utils/common/src/lib/documentation.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Documentation = void 0;
const swagger_1 = __webpack_require__("@nestjs/swagger");
class Documentation {
}
Documentation.setup = (title, path, app) => {
    const documentConfig = new swagger_1.DocumentBuilder()
        .setTitle(title)
        .setDescription('The Madify API description')
        .setVersion('1.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JSON Web Token',
        description: 'Enter JSON Web Token',
        in: 'header',
    }, 'JSON Web Token Authorization')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, documentConfig);
    swagger_1.SwaggerModule.setup(path, app, document);
};
exports.Documentation = Documentation;


/***/ }),

/***/ "../../libs/utils/common/src/lib/hash.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyHash = void 0;
const bcrypt_1 = __webpack_require__("bcrypt");
const saltOrRounds = 10;
class MadifyHash {
    static hash(payload) {
        return (0, bcrypt_1.hash)(payload, saltOrRounds);
    }
    static compare(payload, hashed) {
        return (0, bcrypt_1.compare)(payload, hashed);
    }
}
exports.MadifyHash = MadifyHash;


/***/ }),

/***/ "../../libs/utils/common/src/lib/helmet.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getHelmetOptions = void 0;
exports.getHelmetOptions = {
    contentSecurityPolicy: {
        directives: {
            defaultSrc: [`'self'`, 'unpkg.com'],
            styleSrc: [
                `'self'`,
                `'unsafe-inline'`,
                'cdn.jsdelivr.net',
                'fonts.googleapis.com',
                'unpkg.com',
            ],
            fontSrc: [`'self'`, 'fonts.gstatic.com', 'data:'],
            imgSrc: [`'self'`, 'data:', 'cdn.jsdelivr.net', 'validator.swagger.io'],
            scriptSrc: [
                `'self'`,
                `https: 'unsafe-inline'`,
                `cdn.jsdelivr.net`,
                `'unsafe-eval'`,
            ],
        },
    },
};


/***/ }),

/***/ "../../libs/utils/common/src/lib/logger.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyLogger = void 0;
const util_1 = __webpack_require__("util");
const common_1 = __webpack_require__("@nestjs/common");
class MadifyLogger extends common_1.ConsoleLogger {
    constructor(context, options = {
        logLevels: MadifyLogger.Levels,
        timestamp: true,
    }) {
        super(context, options);
    }
    formatContext(context, time) {
        var _a, _b;
        const timeContext = time ? `+${time}ms` : '';
        return `[${(_b = (_a = this.context) !== null && _a !== void 0 ? _a : context) !== null && _b !== void 0 ? _b : 'unknown'}] - ${timeContext}`;
    }
    log(message, context) {
        super.log(message, this.formatContext(context));
    }
    error(message, context) {
        super.error(message instanceof Error
            ? (0, util_1.inspect)({
                name: message.name,
                message: message.name,
                stack: message.stack,
            })
            : typeof message === 'string'
                ? message
                : (0, util_1.inspect)(message), '', this.formatContext(context));
    }
    warn(message, context) {
        super.warn(message, this.formatContext(context));
    }
}
MadifyLogger.Levels =  false
    ? 0
    : ['log', 'error', 'warn', 'debug', 'verbose'];
exports.MadifyLogger = MadifyLogger;


/***/ }),

/***/ "../../libs/utils/config/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/config/src/lib/utils-config.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/config/src/lib/config.constant.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/config/src/lib/config.enum.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/config/src/lib/config.interface.ts"), exports);


/***/ }),

/***/ "../../libs/utils/config/src/lib/config.constant.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisCacheKey = void 0;
exports.RedisCacheKey = {
    USER: {
        name: 'user',
        ttl: Number(process.env.REDIS_CACHED_TTL) || 5000,
        ttlShared: Number(process.env.REDIS_CACHED_SHARED_TTL) || 5000,
    },
    VEHICLE: {
        name: 'vehicle',
        ttl: Number(process.env.REDIS_CACHED_TTL) || 5000,
        ttlShared: Number(process.env.REDIS_CACHED_SHARED_TTL) || 5000,
    },
};


/***/ }),

/***/ "../../libs/utils/config/src/lib/config.enum.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigKey = exports.APIPrefix = void 0;
var APIPrefix;
(function (APIPrefix) {
    APIPrefix["AUTHENTICATION"] = "authentication";
    APIPrefix["USER"] = "user";
    APIPrefix["VEHICLE"] = "vehicle";
})(APIPrefix = exports.APIPrefix || (exports.APIPrefix = {}));
var ConfigKey;
(function (ConfigKey) {
    ConfigKey["ELASTICSEARCH"] = "elasticsearch";
    ConfigKey["STORE"] = "redis-store";
    ConfigKey["CACHE"] = "redis-cache";
    ConfigKey["JWT"] = "jwt";
    ConfigKey["MONGOOSE"] = "mongoose";
    ConfigKey["THROTTLER"] = "throttler";
    ConfigKey["STORAGE"] = "storage";
})(ConfigKey = exports.ConfigKey || (exports.ConfigKey = {}));


/***/ }),

/***/ "../../libs/utils/config/src/lib/config.interface.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../libs/utils/config/src/lib/register/jwt.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jwtConfig = void 0;
const config_1 = __webpack_require__("@nestjs/config");
const config_enum_1 = __webpack_require__("../../libs/utils/config/src/lib/config.enum.ts");
exports.jwtConfig = (0, config_1.registerAs)(config_enum_1.ConfigKey.JWT, () => ({
    secret: process.env.JWT_SECRET,
    accessTokenExpiresIn: Number(process.env.JWT_ACCESS_EXPIRATION),
    refreshTokenExpiresIn: Number(process.env.JWT_REFRESH_EXPIRATION),
}));


/***/ }),

/***/ "../../libs/utils/config/src/lib/register/mongoose.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mongooseConfig = void 0;
const config_1 = __webpack_require__("@nestjs/config");
const config_enum_1 = __webpack_require__("../../libs/utils/config/src/lib/config.enum.ts");
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_AUTHENTICATION = DB_USERNAME && DB_PASSWORD ? `${DB_USERNAME}:${DB_PASSWORD}@` : '';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USE_LOCAL = DB_HOST === 'localhost';
const DB_FORMAT = `mongodb${DB_USE_LOCAL ? '' : '+srv'}`;
const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME || '';
exports.mongooseConfig = (0, config_1.registerAs)(config_enum_1.ConfigKey.MONGOOSE, () => ({
    uri: `${DB_FORMAT}://${DB_AUTHENTICATION}${DB_HOST}/${DB_DATABASE_NAME}?retryWrites=true&w=majority`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}));


/***/ }),

/***/ "../../libs/utils/config/src/lib/register/redis.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.redisCacheConfig = exports.redisStoreConfig = void 0;
const tslib_1 = __webpack_require__("tslib");
const config_1 = __webpack_require__("@nestjs/config");
const redisStore = tslib_1.__importStar(__webpack_require__("cache-manager-redis-store"));
const config_enum_1 = __webpack_require__("../../libs/utils/config/src/lib/config.enum.ts");
exports.redisStoreConfig = (0, config_1.registerAs)(config_enum_1.ConfigKey.STORE, () => ({
    store: redisStore,
    host: process.env.REDIS_STORE_HOST,
    port: Number(process.env.REDIS_STORE_PORT),
    db: Number(process.env.REDIS_STORE_DB) || 1,
    ttl: Number(process.env.REDIS_STORE_TTL) || 1000,
}));
exports.redisCacheConfig = (0, config_1.registerAs)(config_enum_1.ConfigKey.CACHE, () => ({
    store: redisStore,
    host: process.env.REDIS_CACHE_HOST,
    port: Number(process.env.REDIS_CACHE_PORT),
    db: Number(process.env.REDIS_CACHE_DB) || 1,
    ttl: Number(process.env.REDIS_CACHE_TTL) || 1000,
}));


/***/ }),

/***/ "../../libs/utils/config/src/lib/register/storage.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storageConfig = void 0;
const config_1 = __webpack_require__("@nestjs/config");
const config_enum_1 = __webpack_require__("../../libs/utils/config/src/lib/config.enum.ts");
exports.storageConfig = (0, config_1.registerAs)(config_enum_1.ConfigKey.STORAGE, () => {
    var _a;
    return ({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        clientId: process.env.CLIENT_ID,
        privateKey: process.env.PRIVATE_KEY,
        bucketName: process.env.BUCKET_NAME,
        expired: Number((_a = process.env.EXPIRED) !== null && _a !== void 0 ? _a : 1000 * 60),
    });
});


/***/ }),

/***/ "../../libs/utils/config/src/lib/register/throttler.config.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throttlerConfig = void 0;
const config_1 = __webpack_require__("@nestjs/config");
const config_enum_1 = __webpack_require__("../../libs/utils/config/src/lib/config.enum.ts");
exports.throttlerConfig = (0, config_1.registerAs)(config_enum_1.ConfigKey.THROTTLER, () => ({
    limit: Number(process.env.RATE_LIMIT_LIMIT) || 5,
    ttl: Number(process.env.RATE_LIMIT_TTL) || 1000,
}));


/***/ }),

/***/ "../../libs/utils/config/src/lib/utils-config.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.throttlerConfig = exports.storageConfig = exports.redisStoreConfig = exports.redisCacheConfig = exports.mongooseConfig = exports.jwtConfig = exports.MadifyConfigModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const jwt_config_1 = __webpack_require__("../../libs/utils/config/src/lib/register/jwt.config.ts");
Object.defineProperty(exports, "jwtConfig", ({ enumerable: true, get: function () { return jwt_config_1.jwtConfig; } }));
const mongoose_config_1 = __webpack_require__("../../libs/utils/config/src/lib/register/mongoose.config.ts");
Object.defineProperty(exports, "mongooseConfig", ({ enumerable: true, get: function () { return mongoose_config_1.mongooseConfig; } }));
const redis_config_1 = __webpack_require__("../../libs/utils/config/src/lib/register/redis.config.ts");
Object.defineProperty(exports, "redisCacheConfig", ({ enumerable: true, get: function () { return redis_config_1.redisCacheConfig; } }));
Object.defineProperty(exports, "redisStoreConfig", ({ enumerable: true, get: function () { return redis_config_1.redisStoreConfig; } }));
const storage_config_1 = __webpack_require__("../../libs/utils/config/src/lib/register/storage.config.ts");
Object.defineProperty(exports, "storageConfig", ({ enumerable: true, get: function () { return storage_config_1.storageConfig; } }));
const throttler_config_1 = __webpack_require__("../../libs/utils/config/src/lib/register/throttler.config.ts");
Object.defineProperty(exports, "throttlerConfig", ({ enumerable: true, get: function () { return throttler_config_1.throttlerConfig; } }));
let MadifyConfigModule = class MadifyConfigModule {
};
MadifyConfigModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [
                    jwt_config_1.jwtConfig,
                    mongoose_config_1.mongooseConfig,
                    redis_config_1.redisCacheConfig,
                    redis_config_1.redisStoreConfig,
                    storage_config_1.storageConfig,
                    throttler_config_1.throttlerConfig,
                ],
            }),
        ],
        exports: [config_1.ConfigModule],
    })
], MadifyConfigModule);
exports.MadifyConfigModule = MadifyConfigModule;


/***/ }),

/***/ "../../libs/utils/decorator/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/decorator/src/lib/authorizer.decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/decorator/src/lib/bearer-token.decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/decorator/src/lib/controller.decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/decorator/src/lib/request-meta.decorator.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/decorator/src/lib/madify-auth.decorator.ts"), exports);


/***/ }),

/***/ "../../libs/utils/decorator/src/lib/authorizer.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Auth = exports.Authorizer = void 0;
const tslib_1 = __webpack_require__("tslib");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
class Authorizer {
    constructor(account) {
        this.account = account;
    }
    requestAccessForAccount(accountId) {
        if (this.account.id === String(accountId))
            return;
        throw new exception_1.MadifyException('FORBIDDEN');
    }
}
exports.Authorizer = Authorizer;
exports.Auth = (0, common_1.createParamDecorator)((_, ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const request = ctx.switchToHttp().getRequest();
    const account = yield request.$account;
    return new Authorizer(account);
}));


/***/ }),

/***/ "../../libs/utils/decorator/src/lib/bearer-token.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BearerToken = void 0;
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
exports.BearerToken = (0, common_1.createParamDecorator)((_, ctx) => {
    var _a, _b;
    const headers = ctx.switchToHttp().getRequest().headers;
    const [type, token] = (_b = (_a = headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
    if (!token)
        throw new exception_1.MadifyException('MISSING_AUTHORIZATION_HEADERS');
    return type === 'Bearer' ? token : undefined;
});


/***/ }),

/***/ "../../libs/utils/decorator/src/lib/controller.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyController = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const MadifyController = (options) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)(options.path), (0, common_1.Controller)(options));
};
exports.MadifyController = MadifyController;


/***/ }),

/***/ "../../libs/utils/decorator/src/lib/madify-auth.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifySwaggerHeaderAuth = exports.MadifySharedCached = exports.MadifyAuthorizeAndClearCached = exports.MadifyBasicAuthorize = exports.MadifyAuthorize = void 0;
const database_1 = __webpack_require__("../../libs/database/src/index.ts");
const interceptor_1 = __webpack_require__("../../libs/utils/interceptor/src/index.ts");
const cache_manager_1 = __webpack_require__("@nestjs/cache-manager");
const common_1 = __webpack_require__("@nestjs/common");
const swagger_1 = __webpack_require__("@nestjs/swagger");
const MadifyAuthorize = (cacheConfig) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)('JSON Web Token Authorization'), (0, cache_manager_1.CacheKey)(cacheConfig.name), (0, common_1.CacheTTL)(cacheConfig.ttl), (0, common_1.UseInterceptors)(interceptor_1.HttpCacheIndividualInterceptor), (0, common_1.UseGuards)(interceptor_1.AuthGuard));
};
exports.MadifyAuthorize = MadifyAuthorize;
const MadifyBasicAuthorize = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)('JSON Web Token Authorization'), (0, common_1.UseGuards)(interceptor_1.AuthGuard));
};
exports.MadifyBasicAuthorize = MadifyBasicAuthorize;
const MadifyAuthorizeAndClearCached = (cacheConfig) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)('JSON Web Token Authorization'), (0, cache_manager_1.CacheKey)(cacheConfig.name), (0, common_1.UseGuards)(interceptor_1.AuthGuard), (0, common_1.UseInterceptors)(interceptor_1.HttpCacheClearInterceptor));
};
exports.MadifyAuthorizeAndClearCached = MadifyAuthorizeAndClearCached;
const MadifySharedCached = (cacheConfig) => {
    return (0, common_1.applyDecorators)((0, cache_manager_1.CacheKey)(cacheConfig.name), (0, common_1.CacheTTL)(cacheConfig.ttlShared), (0, common_1.UseInterceptors)(interceptor_1.HttpCacheSharedWithQueryInterceptor));
};
exports.MadifySharedCached = MadifySharedCached;
const MadifySwaggerHeaderAuth = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiHeaders)([
        {
            name: 'platform',
            description: 'This header is required',
            enum: database_1.AcceptPlatform,
            example: database_1.AcceptPlatform.Web,
            required: true,
        },
        {
            name: 'uuid',
            description: 'This header is required',
            example: 'uuid',
            required: true,
        },
    ]));
};
exports.MadifySwaggerHeaderAuth = MadifySwaggerHeaderAuth;


/***/ }),

/***/ "../../libs/utils/decorator/src/lib/request-meta.decorator.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RequestMeta = exports.RequestMetadata = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const request_ip_1 = __webpack_require__("request-ip");
class RequestMetadata {
    constructor(dto) {
        this.platform = dto.platform;
        this.hostUrl = dto.hostUrl;
        this.ip = dto.ip;
        this.userAgent = dto.userAgent;
        this.source = dto.source;
        this.uuid = dto.uuid;
    }
}
exports.RequestMetadata = RequestMetadata;
const getSource = (req) => {
    const header = req.headers['api-metadata']
        ? req.headers['api-metadata']
        : req.headers['API-Metadata'];
    const metadata = Array.isArray(header) ? header : header === null || header === void 0 ? void 0 : header.split(',');
    const sourceQuery = metadata === null || metadata === void 0 ? void 0 : metadata.find((meta) => meta.split('=')[0] === 'src');
    const source = sourceQuery === null || sourceQuery === void 0 ? void 0 : sourceQuery.split('=')[1];
    return source;
};
exports.RequestMeta = (0, common_1.createParamDecorator)((property, ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const req = ctx.switchToHttp().getRequest();
    const requestMetadata = new RequestMetadata({
        platform: req.headers['platform'],
        device: req.headers['device'],
        uuid: req.headers['uuid'],
        hostUrl: `${req.protocol}://${req.hostname}`,
        ip: (0, request_ip_1.getClientIp)(req) || undefined,
        userAgent: req.headers['user-agent'],
        source: getSource(req),
    });
    return property ? requestMetadata[property] : requestMetadata;
}));


/***/ }),

/***/ "../../libs/utils/exception/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/exception/src/lib/exception.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/exception/src/lib/exception.filter.ts"), exports);


/***/ }),

/***/ "../../libs/utils/exception/src/lib/exception.code.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Errors = void 0;
exports.Errors = {
    REQUEST_URL_NOT_FOUND: {
        statusCode: 404,
        code: '1000',
        message: 'The requested URL was not found.',
    },
    MISSING_AUTHORIZATION_HEADERS: {
        statusCode: 401,
        code: '1001',
        message: 'Missing authorization header.',
    },
    MISSING_METADATA_HEADERS: {
        statusCode: 400,
        code: '1002',
        message: 'Missing metadata header.',
    },
    INVALID_ACCESS_TOKEN: {
        statusCode: 401,
        code: '1003',
        message: 'Invalid access token or expire.',
    },
    INVALID_REFRESH_TOKEN: {
        statusCode: 401,
        code: '1004',
        message: 'Invalid refresh token or expire.',
    },
    FORBIDDEN: {
        statusCode: 403,
        code: '1005',
        message: 'Can not access the data. Please try again.',
    },
    RATE_LIMIT_REQUEST: {
        statusCode: 429,
        code: '1006',
        message: `API rate limit exceeded. Please waiting.`,
    },
    INVALID_EMAIL_OR_PASSWORD: {
        statusCode: 400,
        code: '1007',
        message: 'Incorrect email address or password. Please try again.',
    },
    INVALID_EMAIL: {
        statusCode: 400,
        code: '1008',
        message: 'Incorrect email address. Please try again.',
    },
    INVALID_PHONE_NUMBER: {
        statusCode: 400,
        code: '1009',
        message: 'Invalid phone number. Please try again.',
    },
    PAYLOAD_CHANNEL_MISMATCH: {
        statusCode: 400,
        code: '1010',
        message: 'Payload and Channel do not match.',
    },
    EMAIL_OR_PHONE_NOT_FOUND: {
        statusCode: 400,
        code: '1011',
        message: 'Sorry, Something went wrong. Please try again.',
    },
    PLEASE_TRY_AGAIN: {
        statusCode: 400,
        code: '1012',
        message: 'Please try again in 5 minutes.',
    },
    INVALID_OTP: {
        statusCode: 400,
        code: '1013',
        message: 'Invalid OTP code. Please try again.',
    },
    EXPIRED_OTP: {
        statusCode: 400,
        code: '1014',
        message: 'The OTP has been requested past the time limit, please press the "Get OTP" button to request a new code again.',
    },
    INVALID_PASSWORD: {
        statusCode: 400,
        code: '1015',
        message: 'Incorrect password. Please try again.',
    },
    EMAIL_IS_EXIST: {
        statusCode: 400,
        code: '1016',
        message: 'This email already exists. Please try again.',
    },
    DUPLICATE_EMAIL: {
        statusCode: 400,
        code: '1017',
        message: 'This email is already in Madify.',
    },
    SOMETHING_WRONG: {
        statusCode: 400,
        code: '1018',
        message: 'Sorry, Something went wrong. Please try again.',
    },
    NOT_FOUND_DATA: {
        statusCode: 400,
        code: '1019',
        message: 'Not fount data. Please try again.',
    },
    NOT_MATCH_PASSWORD: {
        statusCode: 400,
        code: '1020',
        message: 'Password is not matched. Please try again.',
    },
};


/***/ }),

/***/ "../../libs/utils/exception/src/lib/exception.filter.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var MadifyExceptionFilter_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyExceptionFilter = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("../../libs/utils/common/src/index.ts");
const common_2 = __webpack_require__("@nestjs/common");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/lib/exception.ts");
let MadifyExceptionFilter = MadifyExceptionFilter_1 = class MadifyExceptionFilter {
    constructor() {
        this.logger = new common_1.MadifyLogger(MadifyExceptionFilter_1.name);
    }
    catch(exception, host) {
        this.logger.error(exception);
        const context = host.switchToHttp();
        const exceptionHTTP = exception.getLocalizedException();
        const statusCode = exceptionHTTP.getStatus();
        return context
            .getResponse()
            .status(statusCode)
            .send(exceptionHTTP.getResponse());
    }
};
MadifyExceptionFilter = MadifyExceptionFilter_1 = tslib_1.__decorate([
    (0, common_2.Catch)(exception_1.MadifyException)
], MadifyExceptionFilter);
exports.MadifyExceptionFilter = MadifyExceptionFilter;


/***/ }),

/***/ "../../libs/utils/exception/src/lib/exception.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyException = void 0;
const common_1 = __webpack_require__("@nestjs/common");
const exception_code_1 = __webpack_require__("../../libs/utils/exception/src/lib/exception.code.ts");
class MadifyErrors {
    static getLocalizedError(code) {
        return MadifyErrors.default[code];
    }
}
MadifyErrors.default = exception_code_1.Errors;
class MadifyException extends Error {
    constructor(code, payload) {
        super();
        this.code = code;
        this.payload = payload;
    }
    getLocalizedException() {
        const error = MadifyErrors.getLocalizedError(this.code);
        if (this.payload)
            error.payload = this.payload;
        return new common_1.HttpException(error, Number(error.statusCode));
    }
}
exports.MadifyException = MadifyException;


/***/ }),

/***/ "../../libs/utils/interceptor/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/interceptor/src/lib/utils-interceptor.module.ts"), exports);


/***/ }),

/***/ "../../libs/utils/interceptor/src/lib/cache/http.cache.clear.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpCacheClearInterceptor = void 0;
const tslib_1 = __webpack_require__("tslib");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const cache_manager_1 = __webpack_require__("@nestjs/cache-manager");
const common_1 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const cache_manager_2 = __webpack_require__("cache-manager");
let HttpCacheClearInterceptor = class HttpCacheClearInterceptor {
    constructor(cacheManager, reflector) {
        this.cacheManager = cacheManager;
        this.reflector = reflector;
    }
    intercept(ctx, next) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cacheKey = this.reflector.get(common_1.CACHE_KEY_METADATA, ctx.getHandler());
            if (cacheKey) {
                const context = ctx.switchToHttp();
                const request = context.getRequest();
                const token = this.getTokenFromRequest(request);
                const settingsString = yield this.cacheManager.get(token);
                const settings = settingsString ? JSON.parse(settingsString) : {};
                const keys = yield this.cacheManager.store.keys();
                const sharedCacheKey = keys.filter((el) => el.match(/shared-cache-/g));
                yield Promise.all([
                    ...Object.keys(settings).map((delKey) => this.cacheManager.del(delKey)),
                    ...Object.keys(sharedCacheKey).map((delKey) => this.cacheManager.del(delKey)),
                    this.cacheManager.del(token),
                ]);
            }
            return next.handle();
        });
    }
    getTokenFromRequest(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        if (!token)
            throw new exception_1.MadifyException('MISSING_AUTHORIZATION_HEADERS');
        return type === 'Bearer' ? token : undefined;
    }
};
HttpCacheClearInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _a : Object, typeof (_b = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _b : Object])
], HttpCacheClearInterceptor);
exports.HttpCacheClearInterceptor = HttpCacheClearInterceptor;


/***/ }),

/***/ "../../libs/utils/interceptor/src/lib/cache/http.cache.individual.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpCacheIndividualInterceptor = void 0;
const tslib_1 = __webpack_require__("tslib");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const cache_manager_1 = __webpack_require__("@nestjs/cache-manager");
const common_1 = __webpack_require__("@nestjs/common");
let HttpCacheIndividualInterceptor = class HttpCacheIndividualInterceptor extends cache_manager_1.CacheInterceptor {
    trackBy(ctx) {
        const cacheManager = this.cacheManager;
        const cacheKey = this.reflector.get(common_1.CACHE_KEY_METADATA, ctx.getHandler());
        if (cacheKey) {
            const request = ctx.switchToHttp().getRequest();
            const token = this.getTokenFromRequest(request);
            const finalKey = `${cacheKey}-${token}-${request.url}}`;
            cacheManager.get(token).then((settingString) => {
                const setting = JSON.parse(settingString || '{}');
                setting[finalKey] = true;
                cacheManager.set(token, JSON.stringify(setting));
            });
            return finalKey;
        }
        return super.trackBy(ctx);
    }
    getTokenFromRequest(request) {
        var _a, _b;
        const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
        if (!token)
            throw new exception_1.MadifyException('MISSING_AUTHORIZATION_HEADERS');
        return type === 'Bearer' ? token : undefined;
    }
};
HttpCacheIndividualInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], HttpCacheIndividualInterceptor);
exports.HttpCacheIndividualInterceptor = HttpCacheIndividualInterceptor;


/***/ }),

/***/ "../../libs/utils/interceptor/src/lib/cache/http.cache.shared.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpCacheSharedWithQueryInterceptor = void 0;
const tslib_1 = __webpack_require__("tslib");
const cache_manager_1 = __webpack_require__("@nestjs/cache-manager");
const common_1 = __webpack_require__("@nestjs/common");
let HttpCacheSharedWithQueryInterceptor = class HttpCacheSharedWithQueryInterceptor extends cache_manager_1.CacheInterceptor {
    trackBy(context) {
        const cacheKey = this.reflector.get(common_1.CACHE_KEY_METADATA, context.getHandler());
        if (cacheKey) {
            const request = context.switchToHttp().getRequest();
            return `shared-cache-${cacheKey}-${request.url}`;
        }
        return super.trackBy(context);
    }
};
HttpCacheSharedWithQueryInterceptor = tslib_1.__decorate([
    (0, common_1.Injectable)()
], HttpCacheSharedWithQueryInterceptor);
exports.HttpCacheSharedWithQueryInterceptor = HttpCacheSharedWithQueryInterceptor;


/***/ }),

/***/ "../../libs/utils/interceptor/src/lib/guard/auth.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const database_1 = __webpack_require__("../../libs/database/src/index.ts");
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const config_2 = __webpack_require__("@nestjs/config");
const jwt_1 = __webpack_require__("@nestjs/jwt");
let AuthGuard = class AuthGuard {
    constructor(repository, jwtService, configService) {
        this.repository = repository;
        this.jwtService = jwtService;
        this.configService = configService;
        this.jwtToken = this.configService.get(config_1.ConfigKey.JWT);
    }
    canActivate(context) {
        var _a, _b;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const request = context.switchToHttp().getRequest();
            const [type, token] = (_b = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) !== null && _b !== void 0 ? _b : [];
            if (type !== 'Bearer' || !token)
                throw new exception_1.MadifyException('MISSING_AUTHORIZATION_HEADERS');
            const payload = this.verifyToken(token);
            if (!payload)
                throw new exception_1.MadifyException('INVALID_ACCESS_TOKEN');
            const id = payload.id;
            const account = yield this.repository.findAccount({
                id,
                visibility: database_1.EntityVisibility.Publish,
                credentials: {
                    accessToken: token,
                    accessTokenExpiration: { $gte: new Date() },
                },
            });
            if (!account)
                throw new exception_1.MadifyException('INVALID_ACCESS_TOKEN');
            request.$account = account;
            return true;
        });
    }
    verifyToken(token) {
        return this.jwtService.verify(token, {
            secret: this.jwtToken.secret,
        });
    }
};
AuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, common_1.Inject)(database_1.REPOSITORY_PROVIDE)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof database_1.IRepository !== "undefined" && database_1.IRepository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_2.ConfigService !== "undefined" && config_2.ConfigService) === "function" ? _c : Object])
], AuthGuard);
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "../../libs/utils/interceptor/src/lib/logger/logging.interceptor.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var MadifyRestLogger_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyRestLogger = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("../../libs/utils/common/src/index.ts");
const common_2 = __webpack_require__("@nestjs/common");
const rxjs_1 = __webpack_require__("rxjs");
let MadifyRestLogger = MadifyRestLogger_1 = class MadifyRestLogger {
    constructor() {
        this.logger = new common_1.MadifyLogger(MadifyRestLogger_1.name);
    }
    intercept(context, next) {
        const { method, url } = context.switchToHttp().getRequest();
        const { statusCode } = context.switchToHttp().getResponse();
        const message = `Incoming request - ${statusCode} - ${method} - ${url}`;
        this.logger.log(message);
        return next.handle().pipe((0, rxjs_1.tap)({
            next: (val) => this.logNext(val, context),
            error: (err) => this.logError(err, context),
        }));
    }
    logNext(_, context) {
        const { method, url } = context.switchToHttp().getRequest();
        const { statusCode } = context.switchToHttp().getResponse();
        const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;
        if ([common_2.HttpStatus.OK, common_2.HttpStatus.CREATED, common_2.HttpStatus.NO_CONTENT].includes(statusCode))
            this.logger.log(message);
        else
            this.logger.log(message);
    }
    logError(error, context) {
        var _a;
        const { method, url } = context.switchToHttp().getRequest();
        if (error instanceof common_2.HttpException) {
            const statusCode = error.getStatus();
            const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;
            this.logger.error(message, (_a = error.stack) !== null && _a !== void 0 ? _a : error);
        }
        else {
            this.logger.error(`Outgoing response - ${method} - ${url}`, error.stack);
        }
    }
};
MadifyRestLogger = MadifyRestLogger_1 = tslib_1.__decorate([
    (0, common_2.Injectable)()
], MadifyRestLogger);
exports.MadifyRestLogger = MadifyRestLogger;


/***/ }),

/***/ "../../libs/utils/interceptor/src/lib/utils-interceptor.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyRestLogger = exports.HttpCacheSharedWithQueryInterceptor = exports.HttpCacheIndividualInterceptor = exports.HttpCacheClearInterceptor = exports.AuthGuard = exports.MadifyUtilsInterceptorModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const http_cache_clear_interceptor_1 = __webpack_require__("../../libs/utils/interceptor/src/lib/cache/http.cache.clear.interceptor.ts");
Object.defineProperty(exports, "HttpCacheClearInterceptor", ({ enumerable: true, get: function () { return http_cache_clear_interceptor_1.HttpCacheClearInterceptor; } }));
const http_cache_individual_interceptor_1 = __webpack_require__("../../libs/utils/interceptor/src/lib/cache/http.cache.individual.interceptor.ts");
Object.defineProperty(exports, "HttpCacheIndividualInterceptor", ({ enumerable: true, get: function () { return http_cache_individual_interceptor_1.HttpCacheIndividualInterceptor; } }));
const http_cache_shared_interceptor_1 = __webpack_require__("../../libs/utils/interceptor/src/lib/cache/http.cache.shared.interceptor.ts");
Object.defineProperty(exports, "HttpCacheSharedWithQueryInterceptor", ({ enumerable: true, get: function () { return http_cache_shared_interceptor_1.HttpCacheSharedWithQueryInterceptor; } }));
const auth_guard_1 = __webpack_require__("../../libs/utils/interceptor/src/lib/guard/auth.guard.ts");
Object.defineProperty(exports, "AuthGuard", ({ enumerable: true, get: function () { return auth_guard_1.AuthGuard; } }));
const logging_interceptor_1 = __webpack_require__("../../libs/utils/interceptor/src/lib/logger/logging.interceptor.ts");
Object.defineProperty(exports, "MadifyRestLogger", ({ enumerable: true, get: function () { return logging_interceptor_1.MadifyRestLogger; } }));
let MadifyUtilsInterceptorModule = class MadifyUtilsInterceptorModule {
};
MadifyUtilsInterceptorModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
    })
], MadifyUtilsInterceptorModule);
exports.MadifyUtilsInterceptorModule = MadifyUtilsInterceptorModule;


/***/ }),

/***/ "../../libs/utils/module/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/module/src/lib/cache/cache.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/module/src/lib/jwt/jwt.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/module/src/lib/mongoose/mongoose.module.ts"), exports);
tslib_1.__exportStar(__webpack_require__("../../libs/utils/module/src/lib/throttler/throttler.module.ts"), exports);


/***/ }),

/***/ "../../libs/utils/module/src/lib/cache/cache.factory.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCacheModuleOptions = void 0;
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const getCacheModuleOptions = (config) => config.get(config_1.ConfigKey.CACHE);
exports.getCacheModuleOptions = getCacheModuleOptions;


/***/ }),

/***/ "../../libs/utils/module/src/lib/cache/cache.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyCacheModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const cache_manager_1 = __webpack_require__("@nestjs/cache-manager");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const cache_factory_1 = __webpack_require__("../../libs/utils/module/src/lib/cache/cache.factory.ts");
let MadifyCacheModule = class MadifyCacheModule {
};
MadifyCacheModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.registerAsync({
                useFactory: cache_factory_1.getCacheModuleOptions,
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [cache_manager_1.CacheModule],
    })
], MadifyCacheModule);
exports.MadifyCacheModule = MadifyCacheModule;


/***/ }),

/***/ "../../libs/utils/module/src/lib/jwt/jwt.factory.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getJWTModuleOptions = void 0;
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const getJWTModuleOptions = (config) => ({
    secret: config.get(config_1.ConfigKey.JWT).secret,
});
exports.getJWTModuleOptions = getJWTModuleOptions;


/***/ }),

/***/ "../../libs/utils/module/src/lib/jwt/jwt.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyJwtConfigModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const jwt_1 = __webpack_require__("@nestjs/jwt");
const jwt_factory_1 = __webpack_require__("../../libs/utils/module/src/lib/jwt/jwt.factory.ts");
let MadifyJwtConfigModule = class MadifyJwtConfigModule {
};
MadifyJwtConfigModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                useFactory: jwt_factory_1.getJWTModuleOptions,
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [jwt_1.JwtModule],
    })
], MadifyJwtConfigModule);
exports.MadifyJwtConfigModule = MadifyJwtConfigModule;


/***/ }),

/***/ "../../libs/utils/module/src/lib/mongoose/mongoose.factory.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMongooseModuleOptions = void 0;
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const getMongooseModuleOptions = (config) => config.get(config_1.ConfigKey.MONGOOSE);
exports.getMongooseModuleOptions = getMongooseModuleOptions;


/***/ }),

/***/ "../../libs/utils/module/src/lib/mongoose/mongoose.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyMongooseModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const mongoose_1 = __webpack_require__("@nestjs/mongoose");
const mongoose_factory_1 = __webpack_require__("../../libs/utils/module/src/lib/mongoose/mongoose.factory.ts");
let MadifyMongooseModule = class MadifyMongooseModule {
};
MadifyMongooseModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: mongoose_factory_1.getMongooseModuleOptions,
                inject: [config_1.ConfigService],
            }),
        ],
        exports: [mongoose_1.MongooseModule],
    })
], MadifyMongooseModule);
exports.MadifyMongooseModule = MadifyMongooseModule;


/***/ }),

/***/ "../../libs/utils/module/src/lib/throttler/throttler.factory.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getThrottlerModuleOptions = void 0;
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const getThrottlerModuleOptions = (config) => config.get(config_1.ConfigKey.THROTTLER);
exports.getThrottlerModuleOptions = getThrottlerModuleOptions;


/***/ }),

/***/ "../../libs/utils/module/src/lib/throttler/throttler.guard.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyThrottlerGuard = void 0;
const tslib_1 = __webpack_require__("tslib");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const throttler_1 = __webpack_require__("@nestjs/throttler");
const request_ip_1 = __webpack_require__("request-ip");
let MadifyThrottlerGuard = class MadifyThrottlerGuard extends throttler_1.ThrottlerGuard {
    throwThrottlingException() {
        throw new exception_1.MadifyException('RATE_LIMIT_REQUEST');
    }
    getTracker(req) {
        var _a;
        const ip = (0, request_ip_1.getClientIp)(req);
        const userAgent = req.headers['user-agent'];
        const defaultTracker = `${ip}-${userAgent}`;
        return [
            defaultTracker,
            ...this.getTrackers(req.routerPath, (_a = req.body) !== null && _a !== void 0 ? _a : {}),
        ].join('-');
    }
    getTrackers(path, body) {
        if (path.includes('register-with-email')) {
            return [body.email];
        }
        if (path.includes('login-with-email')) {
            return [body.email];
        }
        return [];
    }
};
MadifyThrottlerGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], MadifyThrottlerGuard);
exports.MadifyThrottlerGuard = MadifyThrottlerGuard;


/***/ }),

/***/ "../../libs/utils/module/src/lib/throttler/throttler.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MadifyThrottlerModule = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const config_1 = __webpack_require__("@nestjs/config");
const core_1 = __webpack_require__("@nestjs/core");
const throttler_1 = __webpack_require__("@nestjs/throttler");
const throttler_factory_1 = __webpack_require__("../../libs/utils/module/src/lib/throttler/throttler.factory.ts");
const throttler_guard_1 = __webpack_require__("../../libs/utils/module/src/lib/throttler/throttler.guard.ts");
let MadifyThrottlerModule = class MadifyThrottlerModule {
};
MadifyThrottlerModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRootAsync({
                useFactory: throttler_factory_1.getThrottlerModuleOptions,
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [{ provide: core_1.APP_GUARD, useClass: throttler_guard_1.MadifyThrottlerGuard }],
    })
], MadifyThrottlerModule);
exports.MadifyThrottlerModule = MadifyThrottlerModule;


/***/ }),

/***/ "../../libs/utils/provider/src/index.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
tslib_1.__exportStar(__webpack_require__("../../libs/utils/provider/src/lib/utils-provider.module.ts"), exports);


/***/ }),

/***/ "../../libs/utils/provider/src/lib/google/storage.service.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StorageService = void 0;
const tslib_1 = __webpack_require__("tslib");
const storage_1 = __webpack_require__("@google-cloud/storage");
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const common_1 = __webpack_require__("@nestjs/common");
const config_2 = __webpack_require__("@nestjs/config");
const mimetypes_1 = tslib_1.__importDefault(__webpack_require__("mimetypes"));
let StorageService = class StorageService {
    constructor(configService) {
        this.configService = configService;
    }
    onModuleInit() {
        this.config = this.configService.get(config_1.ConfigKey.STORAGE);
        this.storage = new storage_1.Storage({
            credentials: {
                client_email: this.config.clientEmail,
                client_id: this.config.clientId,
                private_key: this.config.privateKey,
            },
        });
        this.bucket = this.storage.bucket(this.config.bucketName);
    }
    extractMimeType(base64) {
        return base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1];
    }
    generateFilePath(filePath, mimeType) {
        return `${filePath}.${mimetypes_1.default.detectExtension(mimeType)}`;
    }
    createFileBufferFromBase64(base64) {
        const base64EncodedImageString = base64.replace(/^data:image\/\w+;base64,/, '');
        return Buffer.from(base64EncodedImageString, 'base64');
    }
    uploadFile(filePath, base64) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const mimeType = this.extractMimeType(base64);
            const path = this.generateFilePath(filePath, mimeType);
            const fileBuffer = this.createFileBufferFromBase64(base64);
            yield this.saveFileToBucket(path, fileBuffer, mimeType);
            return path;
        });
    }
    saveFileToBucket(filePath, fileBuffer, mimeType) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const file = this.bucket.file(filePath);
            yield file.save(fileBuffer, {
                metadata: { contentType: mimeType, gzip: true },
                private: true,
            });
        });
    }
    generateSignedUrl(filePath) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!filePath)
                return;
            const options = {
                version: 'v4',
                action: 'read',
                expires: Date.now() + this.config.expired,
            };
            const [signedUrl] = yield this.bucket.file(filePath).getSignedUrl(options);
            return signedUrl;
        });
    }
};
StorageService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof config_2.ConfigService !== "undefined" && config_2.ConfigService) === "function" ? _a : Object])
], StorageService);
exports.StorageService = StorageService;


/***/ }),

/***/ "../../libs/utils/provider/src/lib/utils-provider.module.ts":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StorageService = exports.MadifyUtilsProviderModule = exports.STORAGE_PROVIDE = void 0;
const tslib_1 = __webpack_require__("tslib");
const common_1 = __webpack_require__("@nestjs/common");
const storage_service_1 = __webpack_require__("../../libs/utils/provider/src/lib/google/storage.service.ts");
Object.defineProperty(exports, "StorageService", ({ enumerable: true, get: function () { return storage_service_1.StorageService; } }));
exports.STORAGE_PROVIDE = 'storage';
let MadifyUtilsProviderModule = class MadifyUtilsProviderModule {
};
MadifyUtilsProviderModule = tslib_1.__decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: exports.STORAGE_PROVIDE,
                useClass: storage_service_1.StorageService,
            },
        ],
        exports: [exports.STORAGE_PROVIDE],
    })
], MadifyUtilsProviderModule);
exports.MadifyUtilsProviderModule = MadifyUtilsProviderModule;


/***/ }),

/***/ "@fastify/compress":
/***/ ((module) => {

module.exports = require("@fastify/compress");

/***/ }),

/***/ "@fastify/csrf-protection":
/***/ ((module) => {

module.exports = require("@fastify/csrf-protection");

/***/ }),

/***/ "@fastify/helmet":
/***/ ((module) => {

module.exports = require("@fastify/helmet");

/***/ }),

/***/ "@google-cloud/storage":
/***/ ((module) => {

module.exports = require("@google-cloud/storage");

/***/ }),

/***/ "@nestjs/cache-manager":
/***/ ((module) => {

module.exports = require("@nestjs/cache-manager");

/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/platform-fastify":
/***/ ((module) => {

module.exports = require("@nestjs/platform-fastify");

/***/ }),

/***/ "@nestjs/swagger":
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "bcrypt":
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cache-manager":
/***/ ((module) => {

module.exports = require("cache-manager");

/***/ }),

/***/ "cache-manager-redis-store":
/***/ ((module) => {

module.exports = require("cache-manager-redis-store");

/***/ }),

/***/ "class-transformer":
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "lodash":
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "mimetypes":
/***/ ((module) => {

module.exports = require("mimetypes");

/***/ }),

/***/ "mongoose":
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "request-ip":
/***/ ((module) => {

module.exports = require("request-ip");

/***/ }),

/***/ "rxjs":
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "util":
/***/ ((module) => {

module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const compress_1 = tslib_1.__importDefault(__webpack_require__("@fastify/compress"));
const csrf_protection_1 = tslib_1.__importDefault(__webpack_require__("@fastify/csrf-protection"));
const helmet_1 = tslib_1.__importDefault(__webpack_require__("@fastify/helmet"));
const common_1 = __webpack_require__("../../libs/utils/common/src/index.ts");
const config_1 = __webpack_require__("../../libs/utils/config/src/index.ts");
const exception_1 = __webpack_require__("../../libs/utils/exception/src/index.ts");
const interceptor_1 = __webpack_require__("../../libs/utils/interceptor/src/index.ts");
const common_2 = __webpack_require__("@nestjs/common");
const core_1 = __webpack_require__("@nestjs/core");
const platform_fastify_1 = __webpack_require__("@nestjs/platform-fastify");
const lodash_1 = __webpack_require__("lodash");
const user_module_1 = __webpack_require__("./src/app/user.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const prefix = config_1.APIPrefix.USER;
        const port = process.env.PORT || 5002;
        const fastifyAdapter = new platform_fastify_1.FastifyAdapter();
        const app = yield core_1.NestFactory.create(user_module_1.UserModule, fastifyAdapter);
        app.enableCors();
        app.useGlobalPipes(new common_2.ValidationPipe({ whitelist: true }));
        app.useGlobalFilters(new exception_1.MadifyExceptionFilter());
        app.useGlobalInterceptors(new interceptor_1.MadifyRestLogger());
        const path = `${prefix}/documentations`;
        if (true)
            common_1.Documentation.setup((0, lodash_1.startCase)(prefix), path, app);
        yield app.register(csrf_protection_1.default);
        yield app.register(helmet_1.default, common_1.getHelmetOptions);
        yield app.register(compress_1.default, { encodings: ['gzip', 'deflate'] });
        yield app.listen(port, '0.0.0.0');
        common_2.Logger.debug(`🚀 Application is running on: ${yield app.getUrl()}/${path}`);
        common_2.Logger.log(`🚀 Environment at ${"development"}`);
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map