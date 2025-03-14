export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  return data;
}
