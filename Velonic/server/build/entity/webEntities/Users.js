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
const typeorm_1 = require("typeorm");
let W_Users = class W_Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], W_Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'unknown' }),
    __metadata("design:type", String)
], W_Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'unknown' }),
    __metadata("design:type", String)
], W_Users.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'unknown' }),
    __metadata("design:type", String)
], W_Users.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: 'unknown' }),
    __metadata("design:type", String)
], W_Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: 'unknown' }),
    __metadata("design:type", String)
], W_Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: 'unknown' }),
    __metadata("design:type", String)
], W_Users.prototype, "img_profile", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1500, default: 'unknown' }),
    __metadata("design:type", String)
], W_Users.prototype, "bio", void 0);
W_Users = __decorate([
    (0, typeorm_1.Entity)('w_users')
], W_Users);
exports.default = W_Users;
