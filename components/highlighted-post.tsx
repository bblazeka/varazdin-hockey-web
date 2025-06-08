"use client";
import { Card, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { TPostInfo } from "@/lib/types";

type HighlightedPostProps = {
  post: TPostInfo;
};

export const HighlightedPost = ({ post }: HighlightedPostProps) => {
  const { push } = useRouter();
  return (
    <Card
      isPressable
      isFooterBlurred
      onPress={() => push(`/posts/${post.id}`)}
      className="w-full max-w-full max-h-[400px] min-h-[200px] relative overflow-hidden"
      style={{ maxWidth: "100%", minHeight: "200px" }}
    >
      <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden">
        <Image
          removeWrapper
          isZoomed
          alt={post.title}
          className="z-0 w-full h-full object-cover max-w-full"
          src={post.image}
        />
      </div>
      <CardFooter className="absolute bg-black/60 bottom-0 z-10 border-t border-default-600 dark:border-default-100 w-full flex items-center">
        <h4 className="text-white text-lg font-semibold truncate">
          {post.title}
        </h4>
      </CardFooter>
    </Card>
  );
};
