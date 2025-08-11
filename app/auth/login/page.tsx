"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { useState } from "react";
import { loginUser } from "@/Services/AuthApi/AuthApi";


const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();
  const { login } = useAuth();
  const [loginError, setLoginError] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn:loginUser,
    onSuccess: (data) => {
      const userId = data?.user?._id;
      console.log("Logged-in user ID:", userId);

      // Save user in context
      login(data.user, data.token);

      // Navigate
      router.push("/");
    },
    onError: (error: Error) => {
      setLoginError(error.message || "Login failed");
    },
  });

  const onSubmit = (data: LoginForm) => {
    setLoginError(null); // clear previous error
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6">
      {/* Logo */}
      <div className="mb-4 text-[4rem]">
        <Link href="/" className="font-bold relative -top-2">
          mars<span className="text-[#FF9900] text-[3rem]">.in</span>
        </Link>
      </div>

      {/* Card */}
      <div className="w-full max-w-[350px] mx-4">
        <div className="border border-[#ddd] rounded-lg p-6 bg-white">
          <h1 className="text-[28px] mb-4 font-normal">Sign in or create account</h1>

          {/* Error Message */}
          {loginError && (
            <p className="text-red-600 text-sm mb-4">{loginError}</p>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Enter email
            </label>
            <input
              id="email"
              type="text"
              {...register("email")}
              className="w-full px-3 py-2 border border-[#a6a6a6] rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,50%)] focus:outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Password */}
            <label htmlFor="password" className="block text-sm font-bold mb-2 mt-3">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="w-full px-3 py-2 border border-[#a6a6a6] rounded focus:border-[#e77600] focus:shadow-[0_0_3px_2px_rgb(228,121,17,50%)] focus:outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-[7px] px-4 shadow-[0_2px_5px_0_rgba(213,217,217,.5)]"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Logging in..." : "Continue"}
            </button>
          </form>

          {/* Terms */}
          <p className="mt-4 text-xs">
            By continuing, you agree to Amazon&apos;s{" "}
            <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
              Conditions of Use
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
              Privacy Notice
            </Link>
            .
          </p>
        </div>

        {/* Business */}
        <div className="mt-4">
          <h2 className="text-sm font-bold mb-2">Buying for work?</h2>
          <Link href="#" className="text-sm text-[#0066c0] hover:text-[#c45500] hover:underline">
            Shop on Amazon Business
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto pt-10 pb-4 text-xs text-center">
        <div className="flex justify-center gap-8 mb-2">
          <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
            Conditions of Use
          </Link>
          <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
            Privacy Notice
          </Link>
          <Link href="#" className="text-[#0066c0] hover:text-[#c45500] hover:underline">
            Help
          </Link>
        </div>
        <div className="text-[#555]">
          © 1996–{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
        </div>
      </footer>
    </div>
  );
}
