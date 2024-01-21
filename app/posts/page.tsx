import { PostCard } from "@/components/post-card";
import PostList from "@/components/post-list";
import { title } from "@/components/primitives";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return (
    <section>
      <h2 className={title()}>Novosti</h2>
      <PostList posts={allPostsData} />
    </section>
  );
}
