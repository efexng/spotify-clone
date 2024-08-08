// pages/api/userProfile.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  // Here you would normally get the user ID from the session or JWT
  const userId = 1; // Replace with dynamic user ID retrieval based on authentication

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { profileName: true },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ profileName: user.profileName }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ error: 'An error occurred while fetching the user profile' }, { status: 500 });
  }
}
