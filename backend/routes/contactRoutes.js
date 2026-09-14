import { Router } from "express"
import { submitContactMessage } from "../controllers/contactController.js"

const contactRouter = Router()

contactRouter.post("/", submitContactMessage)

export default contactRouter
