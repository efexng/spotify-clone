'use client';
import { Button, Callout, Spinner, TextField, Flex, Text } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styles from '@/app/components/Signup.module.css';

const createUserSchema = z.object({
  emailOrPhone: z.string().min(1, 'Email or Phone Number is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  profileName: z.string().min(1, 'Profile Name is required'),
  dob: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, 'Date of Birth must be in DD/MM/YYYY format'),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']).optional(),
});

type SignupForm = z.infer<typeof createUserSchema>;

const Signup = () => {
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SignupForm>({
    resolver: zodResolver(createUserSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true);
      await axios.post('/api/users', data);
      router.push('/users');
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  });
  

  return (
    <div className='fixed px-48 mt-24 '>
      {error && (
        <Callout.Root color='red'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-4' onSubmit={onSubmit}>
        <Flex direction="column" maxWidth="250px">

          <div className={styles.firstsection}>
            <div>
              <TextField.Root
                variant="surface"
                placeholder="Enter Your Mail ID / Phone No."
                {...register('emailOrPhone')}
                className={styles.section}
              />
              {errors.emailOrPhone && <ErrorMessage>{errors.emailOrPhone.message}</ErrorMessage>}
            </div>

            <div>
              <TextField.Root
                variant="surface"
                type="password"
                placeholder="Create a Password"
                {...register('password')}
                className={styles.section}
              />
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </div>

          </div>

          <div className={styles.firstsection}>

            <div>
              <TextField.Root
                variant="surface"
                placeholder="Enter a Profile Name"
                {...register('profileName')}
                className={styles.section}
              />
              {errors.profileName && <ErrorMessage>{errors.profileName.message}</ErrorMessage>}
            </div>

            <div>
              <TextField.Root
                variant="surface"
                placeholder="DD/MM/YYYY"
                {...register('dob')}
                className={styles.section}
              />
              {errors.dob && <ErrorMessage>{errors.dob.message}</ErrorMessage>}
            </div>

          </div>

          <RadioGroup.Root
            className="RadioGroupRoot"
            onValueChange={(value) => setValue('gender', value as 'MALE' | 'FEMALE' | 'OTHER')} // Type assertion here
            defaultValue={undefined} // Clear default value to avoid issues
          >
            <label htmlFor="viewDensity">Gender:</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RadioGroup.Item className="RadioGroupItem" value="MALE" id="r1" >
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="r1">
                Male
              </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RadioGroup.Item className="RadioGroupItem" value="FEMALE" id="r2">
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="r2">
                Female
              </label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RadioGroup.Item className="RadioGroupItem" value="OTHER" id="r3">
                <RadioGroup.Indicator className="RadioGroupIndicator" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="r3">
                Other
              </label>
            </div>
          </RadioGroup.Root>


          <Button type="submit" disabled={isSubmitting}   className={`${styles.signupButton} flex items-center space-x-2 cursor-pointer`}>
            {isSubmitting}
            <span>Sign Up</span>
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default Signup;
