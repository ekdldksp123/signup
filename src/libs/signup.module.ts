import { validate } from "email-validator"

export const isEmail = (email:string) => {
    if(email === '') return true
    return validate(email)
}