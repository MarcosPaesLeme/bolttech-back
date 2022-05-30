import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './schemas';

@Injectable()
export class ProjectsService {
  constructor(@InjectModel(Project.name) private model: Model<Project>) {}

  async create(project): Promise<Project> {
    const projectCreated = new this.model(project);
    return projectCreated.save();
  }

  async findProjectsByUserId(id: string): Promise<any> {
    return this.model.find({ userId: id }).exec();
  }
}
