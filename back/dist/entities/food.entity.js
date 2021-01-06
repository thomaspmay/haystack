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
exports.FoodEntity = void 0;
const typeorm_1 = require("typeorm");
let FoodEntity = class FoodEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FoodEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "unstructuredFood", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "foodName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "quantity", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "unit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "standardisedQuantity", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "standardisedUnit", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "unitType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "createdDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "expiryDate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], FoodEntity.prototype, "barcode", void 0);
FoodEntity = __decorate([
    typeorm_1.Entity()
], FoodEntity);
exports.FoodEntity = FoodEntity;
//# sourceMappingURL=food.entity.js.map