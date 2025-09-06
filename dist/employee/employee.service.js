"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
let EmployeeService = class EmployeeService {
    constructor() {
        this.employees = [
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
        this.nextId = 6;
    }
    getAllEmployees() {
        return this.employees;
    }
    getEmployeeById(id) {
        const employee = this.employees.find(emp => emp.id === id);
        if (!employee) {
            throw new common_1.NotFoundException(`Employee with ID ${id} not found`);
        }
        return employee;
    }
    createEmployee(createEmployeeDto) {
        const newEmployee = Object.assign({ id: this.nextId++ }, createEmployeeDto);
        this.employees.push(newEmployee);
        return newEmployee;
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)()
], EmployeeService);
//# sourceMappingURL=employee.service.js.map