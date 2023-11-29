import { userSchema, sitterSchema } from "../schema/user.schema";
import mongoose from "mongoose"
const userInfo = mongoose.model('UserInfo', userSchema)
const sitterInfo = mongoose.model('SitterInfo', sitterSchema)

export {userInfo, sitterInfo}