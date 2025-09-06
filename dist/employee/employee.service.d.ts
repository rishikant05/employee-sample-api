import { EmployeeDto, CreateEmployeeDto } from './dtos/employee.dto';
export declare class EmployeeService {
    private employees;
    private nextId;
    getAllEmployees(): EmployeeDto[];
    getEmployeeById(id: number): EmployeeDto;
    createEmployee(createEmployeeDto: CreateEmployeeDto): EmployeeDto;
}
