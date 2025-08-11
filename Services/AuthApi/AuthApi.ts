import { BASE_URL } from "@/app/Api/Api";

// services/authService.ts
export const loginUser = async (data: { email: string; password: string }) => {
  
  
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
  
    return response.json();
  };
  

  export const registerUser = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    mobile: string;
  }) => {
  
  
    // Check if password and confirmPassword match before sending to backend
    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords do not match");
    }
  
    const response = await fetch(`${BASE_URL}auth/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        mobile: data.mobile,
      }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Signup failed');
    }
  
    return response.json();
  };
  