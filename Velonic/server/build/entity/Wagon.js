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
exports.Wagon = void 0;
const typeorm_1 = require("typeorm");
let Wagon = class Wagon {
};
exports.Wagon = Wagon;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Wagon.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Wagon.prototype, "cid", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Wagon.prototype, "stable", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Wagon.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, default: '' }),
    __metadata("design:type", String)
], Wagon.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: -2 }),
    __metadata("design:type", Number)
], Wagon.prototype, "vehicle_tints", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: '-1' }),
    __metadata("design:type", String)
], Wagon.prototype, "vehicle_propsets", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: -1 }),
    __metadata("design:type", Number)
], Wagon.prototype, "vehicle_liveries", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: '-1' }),
    __metadata("design:type", String)
], Wagon.prototype, "vehicle_lantern_propsets", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: -1 }),
    __metadata("design:type", Number)
], Wagon.prototype, "vehicle_extras", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Boolean)
], Wagon.prototype, "isOut", void 0);
exports.Wagon = Wagon = __decorate([
    (0, typeorm_1.Entity)('mtrd_wagons')
], Wagon);
