import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}

  @Get('byProject/:id')
  public async findProjectsByProjectId(@Param('id') id: string): Promise<any> {
    try {
      return await this.service.findProjectsByProjectId(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('')
  public async createTask(@Body() task): Promise<any> {
    try {
      return await this.service.create(task);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  public async updateTask(@Body() task, @Param('id') id: string): Promise<any> {
    try {
      return await this.service.update(id, task);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  public async deleteTask(@Param('id') id: string): Promise<any> {
    try {
      return await this.service.deleteTask(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
