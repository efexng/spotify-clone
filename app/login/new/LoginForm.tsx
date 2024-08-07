'use client';
import { Button, Callout, Spinner, TextField, Flex, Text } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import styles from '@/app/components/Login.module.css';



const loginSchema = z.object({
    emailOrPhone: z.string().min(1, 'Email or Phone Number is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginForm = z.infer<typeof loginSchema>;

const Login = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = handleSubmit(async (data) => {
        try {
            setIsSubmitting(true);
            const response = await axios.post('/api/login', data);
            // Redirect to a protected route after successful login
            router.push('/homepage');
        } catch (error: any) {
            // Capture detailed error message
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }
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

                    </div>

                    <div className={styles.firstsection}>


                        <div>
                            <TextField.Root
                                variant="surface"
                                type="password"
                                placeholder="Enter your Password"
                                {...register('password')}
                                className={styles.section}
                            />
                            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                        </div>

                    </div>


                    <Button type="submit" disabled={isSubmitting} className={`${styles.LoginButton} flex items-center space-x-2 cursor-pointer`}>
                        {isSubmitting}
                        <span>Log in</span>
                    </Button>
                </Flex>
            </form>
        </div>
    );
};

export default Login;
