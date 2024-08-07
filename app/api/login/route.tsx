// pages/api/login.ts
import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '../../validationSchemas';
import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = loginSchema.safeParse(body);
  
    if (!validation.success) {
      return NextResponse.json({ error: 'Validation error', details: validation.error.errors }, { status: 400 });
    }
  
    const { emailOrPhone, password } = body;
  
    try {
      const user = await prisma.user.findFirst({
        where: { emailOrPhone },
      });
  
      console.log('User from DB:', user); // Log the user object
  
      if (!user) {
        return NextResponse.json({ error: 'Invalid email or phone number' }, { status: 401 });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password Valid:', isPasswordValid); // Log the result of the password comparison
  
      if (!isPasswordValid) {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
      }
  
      return NextResponse.json({ message: 'Login successful', user: { emailOrPhone: user.emailOrPhone } }, { status: 200 });
    } catch (error) {
      console.error('Error logging in:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      return NextResponse.json({ error: 'An error occurred while logging in', details: errorMessage }, { status: 500 });
    }
  }
  