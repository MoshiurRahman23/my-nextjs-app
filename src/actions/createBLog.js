export default async function createBLog() {
  const res = await fetch("http://localhost:5000/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  return;
}
