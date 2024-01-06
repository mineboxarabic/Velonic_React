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
exports.Character = void 0;
const typeorm_1 = require("typeorm");
let Character = class Character {
};
exports.Character = Character;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Character.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'John' }),
    __metadata("design:type", String)
], Character.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'Doe' }),
    __metadata("design:type", String)
], Character.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Character.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, default: 'NULL' }),
    __metadata("design:type", String)
], Character.prototype, "dob", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 500 }),
    __metadata("design:type", Number)
], Character.prototype, "cash", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "bankid", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { default: '{}' }),
    __metadata("design:type", String)
], Character.prototype, "licenses", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15, nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15, default: 'false' }),
    __metadata("design:type", String)
], Character.prototype, "is_burner", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: 'unemployed' }),
    __metadata("design:type", String)
], Character.prototype, "job", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, default: 'none' }),
    __metadata("design:type", String)
], Character.prototype, "job2", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 1 }),
    __metadata("design:type", Number)
], Character.prototype, "new", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "deleted", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "jail_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "is_dead", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 1 }),
    __metadata("design:type", Number)
], Character.prototype, "deathes", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "jail_time_mobster", void 0);
__decorate([
    (0, typeorm_1.Column)('mediumtext', { nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "overwrites", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "dirty_money", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "gang_type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "judge_type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "iswjob", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1520, default: '{}' }),
    __metadata("design:type", String)
], Character.prototype, "metaData", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "stress_level", void 0);
__decorate([
    (0, typeorm_1.Column)('mediumtext', { default: '{}' }),
    __metadata("design:type", String)
], Character.prototype, "bones", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 4160, default: '[]' }),
    __metadata("design:type", String)
], Character.prototype, "emotes", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "paycheck", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "rehab", void 0);
__decorate([
    (0, typeorm_1.Column)('mediumtext', { default: 'move_m@casual@d' }),
    __metadata("design:type", String)
], Character.prototype, "meta", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { default: 0 }),
    __metadata("design:type", Number)
], Character.prototype, "casino_chip_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "dna", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "gallery", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "profilepic", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "information", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { nullable: true }),
    __metadata("design:type", String)
], Character.prototype, "pp", void 0);
exports.Character = Character = __decorate([
    (0, typeorm_1.Entity)('characters')
], Character);
