import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  async create(user): Promise<any> {
    const userCreated = new this.model(user);
    return userCreated.save();
  }

  async login(user): Promise<any> {
    return this.model
      .findOne({ email: user.email, password: user.password })
      .exec();
  }

  async findAll(): Promise<any> {
    return this.model.find().exec();
  }
}
