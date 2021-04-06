import express from 'express'
import cors from 'cors'
import config from 'config'
import {json} from 'body-parser'
import db from '../config/database'
import routes from './routes'

const app = express()
const PORT: number = config.get("post") as number;


app.use(cors())
app.use(json())
app.use(routes)

app.listen(PORT, () => {
    console.log('Server is now running at', PORT)
    db()
})