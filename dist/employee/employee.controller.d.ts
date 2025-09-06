import { EmployeeDto, CreateEmployeeDto } from './dtos/employee.dto';
import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    getEmployeeList(): EmployeeDto[];
    getEmployeeById(id: number): EmployeeDto;
    createEmployee(createEmployeeDto: CreateEmployeeDto): EmployeeDto;
}
