import { Router, Request, Response } from 'express'
import FAQ from './FAQ'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
    res.status(400)
})

routes.use('/faq', FAQ)

export default routes