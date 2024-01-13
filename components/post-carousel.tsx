"use client";
import { PostCard } from "@/components/post-card";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";

type TProps = {
  readonly posts: any[];
};

export default function PostCarousel({ posts }: TProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const firstPostIndex = (currentPage - 1) * 3;
  const postsToDisplay = posts.slice(
    firstPostIndex,
    Math.min(firstPostIndex + 3, posts.length)
  );

  return (
    <section className="items-center justify-center">
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
      <Pagination
        color="danger"
        style={{ display: "flex", justifyContent: "center" }}
        showControls
        onChange={(pageNumber: number) => setCurrentPage(pageNumber)}
        total={Math.ceil(posts.length / 3)}
        initialPage={1}
      />
    </section>
  );
}
