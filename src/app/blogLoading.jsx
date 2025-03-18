import LoadingCard from "@/components/ui/LoadingCard";

const BlogLoadingPage = async () => {
  const res = await fetch("http://localhost:5000/foods");
  const posts = await res.json();
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <LoadingCard key={post.id}></LoadingCard>
        ))}
      </div>
    </div>
  );
};

export default BlogLoadingPage;
