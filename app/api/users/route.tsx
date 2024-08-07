// pages/api/users.ts
import { NextRequest, NextResponse } from 'next/server';
import { createUserSchema } from '../../validationSchemas';
import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createUserSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        emailOrPhone: body.emailOrPhone,
        password: hashedPassword,
        profileName: body.profileName,
        dob: body.dob,
        gender: body.gender, 
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ error: 'An error occurred while creating the user' }, { status: 500 });
  }
}
