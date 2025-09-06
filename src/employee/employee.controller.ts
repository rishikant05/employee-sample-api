import { Controller, Get, Post, Body, Param, HttpStatus, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { EmployeeDto, CreateEmployeeDto } from './dtos/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
@ApiTags('Employee API')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('health')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Health check endpoint',
  })
  public health(): { status: string; timestamp: string; port: string | number } {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      port: process.env.PORT || 3000,
    };
  }

  @Get('list')
  @UsePipes(ValidationPipe)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved employee list',
    type: [EmployeeDto],
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public getEmployeeList(): EmployeeDto[] {
    return this.employeeService.getAllEmployees();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  @ApiParam({ name: 'id', type: 'number', description: 'Employee ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Successfully retrieved employee',
    type: EmployeeDto,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Employee not found',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public getEmployeeById(@Param('id', ParseIntPipe) id: number): EmployeeDto {
    return this.employeeService.getEmployeeById(id);
  }

  @Post('')
  @UsePipes(ValidationPipe)
  @ApiBody({ type: CreateEmployeeDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Successfully created employee',
    type: EmployeeDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Invalid input data',
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error',
  })
  public createEmployee(@Body() createEmployeeDto: CreateEmployeeDto): EmployeeDto {
    return this.employeeService.createEmployee(createEmployeeDto);
  }
}
