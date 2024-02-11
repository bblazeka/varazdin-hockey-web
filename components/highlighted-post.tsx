"use client";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const HighlightedPost = (post: any) => {
  const { push } = useRouter();
  console.log(post.post.image);
  return (
    <Card
      isPressable
      isFooterBlurred
      onPress={() => push(`/posts/${post.post.id}`)}
      style={{ height: "100%", width: "950px" }}
    >
      <Image
        removeWrapper
        isZoomed
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={post.post.image}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <h4>{post.post.title}</h4>
      </CardFooter>
    </Card>
  );
};
