import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private model: Model<Task>) {}

  async findProjectsByProjectId(id: string): Promise<any> {
    return this.model.find({ projectId: id }).exec();
  }

  async create(task): Promise<any> {
    const taskCreated = new this.model(task);
    return taskCreated.save();
  }

  async update(id, task): Promise<any> {
    return this.model.findByIdAndUpdate(id, task).exec();
  }

  async deleteTask(id): Promise<any> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
