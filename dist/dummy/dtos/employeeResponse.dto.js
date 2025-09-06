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
exports.EmployeeResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class EmployeeResponse {
}
exports.EmployeeResponse = EmployeeResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'Employee ID' }),
    __metadata("design:type", Number)
], EmployeeResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', description: 'Employee full name' }),
    __metadata("design:type", String)
], EmployeeResponse.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@company.com', description: 'Employee email' }),
    __metadata("design:type", String)
], EmployeeResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Software Engineer', description: 'Employee position' }),
    __metadata("design:type", String)
], EmployeeResponse.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Engineering', description: 'Employee department' }),
    __metadata("design:type", String)
], EmployeeResponse.prototype, "department", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 75000, description: 'Employee salary' }),
    __metadata("design:type", Number)
], EmployeeResponse.prototype, "salary", void 0);
//# sourceMappingURL=employeeResponse.dto.js.map