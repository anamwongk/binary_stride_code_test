import { Request, Response } from 'express'
import FAQCategory from '../models/Category'
import FAQQuestion from '../models/Question'

export const getAllFAQCategories = async (req: Request, res: Response) => {
    try {
        const categories = await FAQCategory.find()
        return res.send(categories)
    } catch (err) {
        return res.status(500)
    }
}

export const getAllQuestionsByCategoryId = async (req: Request, res: Response) => {
    try {
        const { categoryId } = req.params
        const questions = await FAQQuestion.find({ category: categoryId })
        return res.send(questions)
    } catch (err) {
        return res.status(500)
    }
}