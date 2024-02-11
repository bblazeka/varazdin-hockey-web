"use client";
import { PostCard } from "@/components/post-card";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { HighlightedPost } from "./highlighted-post";

type TProps = {
  readonly posts: any[];
};

const THRESHOLD = 3;

export default function PostCarousel({ posts }: TProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const remainingPosts = posts.slice(1);
  const firstPostIndex = (currentPage - 1) * THRESHOLD;
  const postsToDisplay = remainingPosts.slice(
    firstPostIndex,
    Math.min(firstPostIndex + THRESHOLD, posts.length)
  );

  return (
    <section className="items-center justify-center">
      <HighlightedPost post={posts[0]} />
      <div
        className="mt-8"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
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
        total={Math.ceil(remainingPosts.length / THRESHOLD)}
        initialPage={1}
      />
    </section>
  );
}
