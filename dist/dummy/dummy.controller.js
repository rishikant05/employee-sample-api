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
exports.DummyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const employeeResponse_dto_1 = require("./dtos/employeeResponse.dto");
let DummyController = class DummyController {
    constructor() { }
    async getEmployees() {
        return [
            {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@company.com',
                position: 'Software Engineer',
                department: 'Engineering',
                salary: 75000
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'jane.smith@company.com',
                position: 'Product Manager',
                department: 'Product',
                salary: 85000
            },
            {
                id: 3,
                name: 'Mike Johnson',
                email: 'mike.johnson@company.com',
                position: 'DevOps Engineer',
                department: 'Engineering',
                salary: 80000
            },
            {
                id: 4,
                name: 'Sarah Wilson',
                email: 'sarah.wilson@company.com',
                position: 'UI/UX Designer',
                department: 'Design',
                salary: 70000
            },
            {
                id: 5,
                name: 'David Brown',
                email: 'david.brown@company.com',
                position: 'Data Analyst',
                department: 'Analytics',
                salary: 68000
            }
        ];
    }
};
exports.DummyController = DummyController;
__decorate([
    (0, common_1.Get)('employees'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Successfully retrieved employee list',
        type: [employeeResponse_dto_1.EmployeeResponse],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal server error',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DummyController.prototype, "getEmployees", null);
exports.DummyController = DummyController = __decorate([
    (0, common_1.Controller)('dummy'),
    (0, swagger_1.ApiTags)('Dummy API'),
    __metadata("design:paramtypes", [])
], DummyController);
//# sourceMappingURL=dummy.controller.js.map