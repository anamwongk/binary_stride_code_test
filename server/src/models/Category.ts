import mongoose, { Document, Schema } from 'mongoose'
import { IFAQQuestion } from './Question'

export interface IFAQCategory extends Document {
    name: string,
    priority: number
}

const schema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    priority: { type: Number, required: true }
})

const FAQCategory = mongoose.model<IFAQCategory>('Category', schema)

export default FAQCategory