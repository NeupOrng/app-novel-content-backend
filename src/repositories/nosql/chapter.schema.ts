import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ChapterDocument = HydratedDocument<Chapter>;

@Schema({ collection: 'chapters', })
export class Chapter {
    @Prop()
    title: string;

    @Prop()
    content: string;
}

export const ChapterSchema = SchemaFactory.createForClass(Chapter);