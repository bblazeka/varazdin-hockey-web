import { title } from "@/components/primitives";
import { getSortedPostsData } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const postsToDisplay = allPostsData.slice(0, 3);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className={title()}>Novosti</h2>
      <div
        className="mt-8"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {postsToDisplay.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
    </section>
  );
}
