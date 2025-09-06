import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

export class EmployeeDto {
  @ApiProperty({ example: 1, description: 'Employee ID' })
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'Employee full name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john.doe@company.com', description: 'Employee email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Software Engineer', description: 'Employee position' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({ example: 'Engineering', description: 'Employee department' })
  @IsString()
  @IsNotEmpty()
  department: string;

  @ApiProperty({ example: 75000, description: 'Employee salary' })
  @IsNumber()
  salary: number;
}

export class CreateEmployeeDto {
  @ApiProperty({ example: 'John Doe', description: 'Employee full name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'john.doe@company.com', description: 'Employee email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Software Engineer', description: 'Employee position' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({ example: 'Engineering', description: 'Employee department' })
  @IsString()
  @IsNotEmpty()
  department: string;

  @ApiProperty({ example: 75000, description: 'Employee salary' })
  @IsNumber()
  salary: number;
}
