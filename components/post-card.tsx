"use client";
import { Card, CardFooter, Image } from "@heroui/react";
import { useRouter } from "next/navigation";
import { TPostInfo } from "@/lib/types";
import styles from "./post-card.module.css";

export const PostCard = ({ post }: { post: TPostInfo }) => {
  const { push } = useRouter();
  return (
    <Card
      key={post.id}
      isPressable
      fullWidth
      isFooterBlurred
      onPress={() => push(`/posts/${post.id}`)}
      className={styles.card}
    >
      <Image
        isZoomed
        removeWrapper
        alt="Card background"
        className={styles.image}
        src={post.image ?? "/dark_logo.png"}
      />
      <CardFooter className={styles.footer}>
        <span className={styles.title} style={{ fontWeight: "bold" }}>
          {post.title}
        </span>
      </CardFooter>
    </Card>
  );
};
