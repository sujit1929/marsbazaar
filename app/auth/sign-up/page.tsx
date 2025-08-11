'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Input } from '@/components/ui/input'; // adjust path if needed
import { Button } from '@/components/ui/button'; // adjust path if needed
import { useAuth } from '@/app/context/AuthContext';
import { registerUser } from '@/Services/AuthApi/AuthApi';

const signupSchema = z
  .object({
    firstName: z.string().min(3, 'First Name is required'),
    lastName: z.string().min(3, 'Last Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    mobile: z.string().length(10, 'Mobile must be exactly 10 digits'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SignupData = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1); // To manage steps

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      login(data.user, data.token);
      router.push('/');
    },
    onError: (err: any) => {
      alert(err.message || 'Signup failed');
    },
  });

  const onSubmit = (data: SignupData) => {
    if (step === 1 && !data.firstName && !data.lastName) {
      alert('Please fill in the first name and last name');
      return;
    }
    
    if (step === 2 && !data.email && !data.mobile) {
      alert('Please fill in the email and mobile');
      return;
    }
  
    if (step === 3 && (!data.password || !data.confirmPassword)) {
      alert('Please fill in the password and confirm password');
      return;
    }
  
    mutation.mutate(data);
  };
  

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f7f7f7]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Sign up for an account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Step 1 - First Name and Last Name */}
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <Input
                  {...register('firstName')}
                  className="w-full"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <Input
                  {...register('lastName')}
                  className="w-full"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs">{errors.lastName.message}</p>
                )}
              </div>
            </>
          )}

          {/* Step 2 - Email and Mobile */}
          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  {...register('email')}
                  type="email"
                  className="w-full"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <Input
                  {...register('mobile')}
                  type="tel"
                  className="w-full"
                  placeholder="Enter your mobile number"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-xs">{errors.mobile.message}</p>
                )}
              </div>
            </>
          )}

          {/* Step 3 - Password and Confirm Password */}
          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    className="w-full pr-10"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-gray-500" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    {...register('confirmPassword')}
                    type={showConfirmPassword ? 'text' : 'password'}
                    className="w-full pr-10"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon className="h-4 w-4 text-gray-500" />
                    ) : (
                      <EyeIcon className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                )}
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <Button
                type="button"
                onClick={handlePreviousStep}
                className="bg-gray-300 text-gray-700"
              >
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={handleNextStep} className="bg-[#FFD814]">
                Next
              </Button>
            ) : (
              <Button type="submit" className="bg-[#FFD814]">
                {mutation.isPending ? 'Creating Account...' : 'Create Account'}
              </Button>
            )}
          </div>
        </form>

        {/* Already have an account */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
