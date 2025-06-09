"use client";
import { PostCard } from "@/components/post-card";
import { Pagination } from "@heroui/react";
import { useState } from "react";
import { HighlightedPost } from "./highlighted-post";
import styles from "./post-carousel.module.css";
import { TPostInfo } from "@/lib/types";

type TProps = {
  readonly posts: TPostInfo[];
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
    <section className={styles.section}>
      <div className={styles.highlightedWrapper}>
        <HighlightedPost post={posts[0]} />
      </div>

      <div className={styles.postsWrapper}>
        {postsToDisplay.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
      <div className={styles.paginationWrapper}>
        <Pagination
          color="danger"
          showControls
          onChange={(pageNumber: number) => setCurrentPage(pageNumber)}
          total={Math.ceil(remainingPosts.length / THRESHOLD)}
          initialPage={1}
        />
      </div>
    </section>
  );
}
