import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Task extends Document {
  @Prop({
    unique: true,
    required: true,
  })
  description: string;

  @Prop({
    required: true,
    enum: ['TODO', 'DOING', 'DONE'],
    default: 'TODO',
  })
  status: string;

  @Prop({
    required: true,
  })
  projectId: string;

  @Prop()
  due_date: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
