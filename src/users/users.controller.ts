import {
  Body,
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { AuthorizationGuard } from 'src/authorization/authorization.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get('')
  public async getUsers(): Promise<any> {
    try {
      return await this.service.findAll();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('')
  public async createUsers(@Body() user): Promise<any> {
    try {
      return await this.service.create(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  public async login(@Body() user): Promise<any> {
    try {
      const auth = await this.service.login(user);
      if (!auth) {
        throw new BadRequestException('User not found');
      }
      return { token: `${Math.random()}`, id: auth._id };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
