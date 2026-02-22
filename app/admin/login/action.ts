import { dbConnect } from "@/lib/mongodb"
import { error } from "console"

export async function LoginAction(formData:FormData){
    try{

        await dbConnect()
        const email= formData.get('email')
        const password = formData.get('passwrod')

        if(!email || !password){
            return {error:'All fields are requried'}
        }

        if(email == 'admin@gmail.com' && password == 'admin@123') {
            
        }

    }catch(err:any){
        return {error:err.message || 'login failed'}
    }
}