import { title } from "@/components/primitives";
import { getSortedPostsData } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import { Pagination } from "@nextui-org/react";
import PostCarousel from "@/components/post-carousel";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className={title()}>Novosti</h2>
      <PostCarousel posts={allPostsData} />
    </section>
  );
}
