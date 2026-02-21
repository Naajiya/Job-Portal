'use server'

import { dbConnect } from '@/lib/mongodb'
import { Employer } from '@/models/Employers'
import bcrypt from 'bcryptjs'

// ✅ Register Action
export async function registerAction(formData: FormData) {
  try {
    await dbConnect()

    const companyName = formData.get('companyName') as string
    const businessMail = formData.get('businessMail') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (!companyName || !businessMail || !password || !confirmPassword) {
      return { error: 'All fields are required' }
    }

    if (password !== confirmPassword) {
      return { error: 'Passwords do not match' }
    }

    const existing = await Employer.findOne({ businessMail })
    if (existing) {
      return { error: 'Email already registered' }
    }

    // hash password before saving
    const hashed = await bcrypt.hash(password, 10)
    const newUser = await Employer.create({
      companyName,
      businessMail,
      password: hashed,
    })

    return { success: 'Registration successful',  user: {
    companyName: newUser.companyName,
    businessMail: newUser.businessMail,
  }, }
  } catch (err: any) {
    return { error: err.message || 'Registration failed' }
  }
}

// ✅ Login Action
export async function loginAction(formData: FormData) {
  try {
    await dbConnect()

    const businessMail = formData.get('businessMail') as string
    const password = formData.get('password') as string

    if (!businessMail || !password) {
      return { error: 'All fields are required' }
    }

    const user = await Employer.findOne({ businessMail })
    if (!user) {
      return { error: 'Email not found' }
    }

    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return { error: 'Invalid password' }
    }

    // If login success, you can later create a session here
    return {
      success: 'Login successful',
      employer: {
        businessMail: user.businessMail,
        companyName: user.companyName,
      },
    }
  } catch (err: any) {
    return { error: err.message || 'Login failed' }
  }
}