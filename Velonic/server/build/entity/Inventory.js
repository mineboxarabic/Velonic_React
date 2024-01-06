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
exports.Inventory = void 0;
const typeorm_1 = require("typeorm");
let Inventory = class Inventory {
};
exports.Inventory = Inventory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Inventory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255 }),
    __metadata("design:type", String)
], Inventory.prototype, "item_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: '0' }),
    __metadata("design:type", String)
], Inventory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], Inventory.prototype, "information", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Inventory.prototype, "slot", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Inventory.prototype, "dropped", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { default: 0 }),
    __metadata("design:type", Number)
], Inventory.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 100 }),
    __metadata("design:type", Number)
], Inventory.prototype, "quality", void 0);
exports.Inventory = Inventory = __decorate([
    (0, typeorm_1.Entity)('inventory')
], Inventory);
