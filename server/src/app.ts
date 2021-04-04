import express, { Request, Response } from 'express'
import cors from 'cors'
import { json } from 'body-parser'

const PORT = 3001

const app = express()

app.use(cors())
app.use(json())

app.get('/categories', (req: Request, res: Response) => {
    const categories = [
        {
            id: 1,
            title: 'Shopping',
            priority: 1
        },
        {
            id: 2,
            title: 'Payment',
            priority: 2
        },
        {
            id: 3,
            title: 'Ordering',
            priority: 5
        },
        {
            id: 4,
            title: 'Returns',
            priority: 4
        },
        {
            id: 5,
            title: 'Product',
            priority: 3
        },
        {
            id: 6,
            title: 'Other',
            priority: 6
        }
    ]
    res.send(categories)
})

app.get('/questions', (req: Request, res: Response) => {
    const questions = [
        {
            id: 1,
            question: "Question 1",
            answer: "Answer 1",
            categoryId: 1,
            priority: 1
        },
        {
            id: 2,
            question: "Question 2",
            answer: "Answer 2",
            categoryId: 1,
            priority: 2
        },
        {
            id: 3,
            question: "Question 3",
            answer: "Answer 3",
            categoryId: 2,
            priority: 2
        },
        {
            id: 4,
            question: "Question 4",
            answer: "Answer 4",
            categoryId: 2,
            priority: 1
        },
        {
            id: 5,
            question: "Question 5",
            answer: "Answer 5",
            categoryId: 3,
            priority: 1
        },
        {
            id: 6,
            question: "Question 6",
            answer: "Answer 6",
            categoryId: 3,
            priority: 2
        }
    ]
    res.send(questions)
})

app.listen(PORT, () => {
    console.log('Server is now running at', PORT)
})