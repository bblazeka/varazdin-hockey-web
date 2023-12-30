import { PostCard } from "@/components/post-card";
import { title } from "@/components/primitives";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return (
    <div>
      <h1 className={title()}>Novosti</h1>
      {allPostsData.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
}
