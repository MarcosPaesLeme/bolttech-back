import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Project extends Document {
  @Prop()
  name: string;

  @Prop()
  userId: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
