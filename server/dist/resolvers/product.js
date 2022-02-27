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
exports.productResolver = void 0;
const isAdmin_1 = require("../middleware/isAdmin");
const type_graphql_1 = require("type-graphql");
const Products_1 = require("../entities/Products");
let productInput = class productInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], productInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], productInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], productInput.prototype, "price", void 0);
productInput = __decorate([
    (0, type_graphql_1.InputType)()
], productInput);
let productResolver = class productResolver {
    allProducts({ req }) {
        return Products_1.Products.find(req.session.userId);
    }
    async addProduct(input) {
        return Products_1.Products.create(Object.assign({}, input)).save();
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Products_1.Products, { nullable: true }),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], productResolver.prototype, "allProducts", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Products_1.Products),
    (0, type_graphql_1.UseMiddleware)(isAdmin_1.isAdmin),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productInput]),
    __metadata("design:returntype", Promise)
], productResolver.prototype, "addProduct", null);
productResolver = __decorate([
    (0, type_graphql_1.Resolver)(Products_1.Products)
], productResolver);
exports.productResolver = productResolver;
//# sourceMappingURL=product.js.map