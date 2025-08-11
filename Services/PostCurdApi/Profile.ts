// Services/ProfileApi.ts
export default async function fetchProfile() {
    const res = await fetch('/profile.json');
    if (!res.ok) throw new Error('Failed to load profile');
    return await res.json();
  }
  