// pages/api/userProfile.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  const userId = 1; 

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { 
        profileName: true,
        emailOrPhone: true, // Include emailOrPhone in the selection
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      profileName: user.profileName, 
      emailOrPhone: user.emailOrPhone, // Return emailOrPhone in the response
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ error: 'An error occurred while fetching the user profile' }, { status: 500 });
  }
}
