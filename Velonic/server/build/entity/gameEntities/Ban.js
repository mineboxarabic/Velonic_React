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
exports.Ban = void 0;
const typeorm_1 = require("typeorm");
let Ban = class Ban {
};
exports.Ban = Ban;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ban.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "banid", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "steam", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "license", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "license2", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "xbox", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "live", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "discord", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "cfx", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "ip", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext'),
    __metadata("design:type", String)
], Ban.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "bannedby", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Ban.prototype, "bannedon", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "expire", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 500, default: '0' }),
    __metadata("design:type", String)
], Ban.prototype, "reason", void 0);
exports.Ban = Ban = __decorate([
    (0, typeorm_1.Entity)('bans')
], Ban);
