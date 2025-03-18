"use server";
export default async function createBLog(data) {
  const res = await fetch("http://localhost:5000/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-cache",
  });
  const postInfo = await res.json();
  return postInfo;
}
