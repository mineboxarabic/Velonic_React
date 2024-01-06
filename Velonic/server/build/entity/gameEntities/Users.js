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
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, default: null, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "hex_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: null, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "steam_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, default: null, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "community_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: null, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "license", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: 'Unknown' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'Unknown' }),
    __metadata("design:type", String)
], User.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'user' }),
    __metadata("design:type", String)
], User.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], User.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: '{}' }),
    __metadata("design:type", String)
], User.prototype, "controls", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: '{}' }),
    __metadata("design:type", String)
], User.prototype, "settings", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: '{}' }),
    __metadata("design:type", String)
], User.prototype, "inventory_settings", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 300 }),
    __metadata("design:type", Number)
], User.prototype, "afk_timer", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 3 }),
    __metadata("design:type", Number)
], User.prototype, "characters_slots", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
