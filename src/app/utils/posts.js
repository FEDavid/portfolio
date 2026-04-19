export default async function getPosts() {
  const res = await fetch("https://dev.to/api/articles?username=fedavid", {
    next: { revalidate: 60 }, // optional caching (ISR)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const articles = await res.json();
  return articles;
}