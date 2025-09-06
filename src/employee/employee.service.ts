import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeDto, CreateEmployeeDto } from './dtos/employee.dto';

@Injectable()
export class EmployeeService {
  private employees: EmployeeDto[] = [
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

  private nextId = 6;

  getAllEmployees(): EmployeeDto[] {
    return this.employees;
  }

  getEmployeeById(id: number): EmployeeDto {
    const employee = this.employees.find(emp => emp.id === id);
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return employee;
  }

  createEmployee(createEmployeeDto: CreateEmployeeDto): EmployeeDto {
    const newEmployee: EmployeeDto = {
      id: this.nextId++,
      ...createEmployeeDto
    };
    this.employees.push(newEmployee);
    return newEmployee;
  }
}
