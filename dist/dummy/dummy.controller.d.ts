import { EmployeeResponse } from './dtos/employeeResponse.dto';
export declare class DummyController {
    constructor();
    getEmployees(): Promise<EmployeeResponse[]>;
}
