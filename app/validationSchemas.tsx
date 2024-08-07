import { z } from 'zod';

export const createUserSchema = z.object({
  emailOrPhone: z.string()
    .min(1, 'Email or Phone Number is required'),
  
  password: z.string()
    .min(6, 'Password must be at least 6 characters'),
  
  profileName: z.string()
    .min(1, 'Profile Name is required'),
  
  dob: z.string()
    .regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Date of Birth must be in DD/MM/YYYY format'),
  
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),  
});
