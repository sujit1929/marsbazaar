export default async function fetchMapping2() {
    const res = await fetch('Practice2.json');
    if (!res.ok) throw new Error('Failed to load profile');
    return await res.json();
  }