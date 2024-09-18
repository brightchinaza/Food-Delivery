import exprress from "express"
import { loginUser,registerUser } from "../controllers/userController.js"

const userRouter = exprress.Router()

userRouter.post("/register",registerUser)
userRouter.post('/login',loginUser)

export default userRouter;