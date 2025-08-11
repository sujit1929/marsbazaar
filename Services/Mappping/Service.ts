// Services/ProfileApi.ts
export default async function fetchMapping() {
    const res = await fetch('Practice1.json');
    if (!res.ok) throw new Error('Failed to load profile');
    return await res.json();
  }
  