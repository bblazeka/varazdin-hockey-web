import { PostCard } from "@/components/post-card";
import PostList from "@/components/post-list";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return (
    <section>
      <PostList posts={allPostsData} />
    </section>
  );
}
