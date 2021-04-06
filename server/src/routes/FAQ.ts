import { Router, Request, Response } from 'express'
import { getAllFAQCategories, getAllQuestionsByCategoryId } from '../controllers/FAQController'

const routes = Router()

routes.get('/categories', getAllFAQCategories)

routes.get('/questions/:categoryId', getAllQuestionsByCategoryId)

export default routes