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
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const employee_dto_1 = require("./dtos/employee.dto");
const employee_service_1 = require("./employee.service");
let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    getEmployeeList() {
        return this.employeeService.getAllEmployees();
    }
    getEmployeeById(id) {
        return this.employeeService.getEmployeeById(id);
    }
    createEmployee(createEmployeeDto) {
        return this.employeeService.createEmployee(createEmployeeDto);
    }
};
exports.EmployeeController = EmployeeController;
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Successfully retrieved employee list',
        type: [employee_dto_1.EmployeeDto],
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal server error',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], EmployeeController.prototype, "getEmployeeList", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number', description: 'Employee ID' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Successfully retrieved employee',
        type: employee_dto_1.EmployeeDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Employee not found',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", employee_dto_1.EmployeeDto)
], EmployeeController.prototype, "getEmployeeById", null);
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    (0, swagger_1.ApiBody)({ type: employee_dto_1.CreateEmployeeDto }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Successfully created employee',
        type: employee_dto_1.EmployeeDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.BAD_REQUEST,
        description: 'Invalid input data',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
        description: 'Internal server error',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_dto_1.CreateEmployeeDto]),
    __metadata("design:returntype", employee_dto_1.EmployeeDto)
], EmployeeController.prototype, "createEmployee", null);
exports.EmployeeController = EmployeeController = __decorate([
    (0, common_1.Controller)('employee'),
    (0, swagger_1.ApiTags)('Employee API'),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeController);
//# sourceMappingURL=employee.controller.js.map