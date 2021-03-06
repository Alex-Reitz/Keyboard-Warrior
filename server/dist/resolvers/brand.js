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
exports.BrandResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Brand_1 = require("../entities/Brand");
let BrandInput = class BrandInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BrandInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], BrandInput.prototype, "description", void 0);
BrandInput = __decorate([
    (0, type_graphql_1.InputType)()
], BrandInput);
let BrandResolver = class BrandResolver {
    async allBrands() {
        return await Brand_1.Brand.find();
    }
    async addBrand(input) {
        return Brand_1.Brand.create(Object.assign({}, input)).save();
    }
    async brand(id) {
        console.log("Here is the brand", await Brand_1.Brand.findOne(id));
        return await Brand_1.Brand.findOne(id);
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Brand_1.Brand], { nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "allBrands", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Brand_1.Brand),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BrandInput]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "addBrand", null);
__decorate([
    (0, type_graphql_1.Query)(() => Brand_1.Brand, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BrandResolver.prototype, "brand", null);
BrandResolver = __decorate([
    (0, type_graphql_1.Resolver)(Brand_1.Brand)
], BrandResolver);
exports.BrandResolver = BrandResolver;
//# sourceMappingURL=brand.js.map