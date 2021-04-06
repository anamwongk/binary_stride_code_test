import mongoose, { Document, Schema } from 'mongoose'
import { IFAQCategory } from './Category'

export interface IFAQQuestion extends Document {
    question: string,
    answer: string,
    priority: number,
    category: (IFAQCategory | string)[]
}

const schema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    priority: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
})

const FAQQuestion = mongoose.model<IFAQQuestion>('Question', schema)

export default FAQQuestion