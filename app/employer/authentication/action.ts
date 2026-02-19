
    'use server'

    export async function loginAction(formData: FormData) {
        const email= formData.get('email')
        const name = formData.get('userName')

        console.log(email, name, "userdetails")
    }