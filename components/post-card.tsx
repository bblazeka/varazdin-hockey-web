"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const PostCard = (post2: any) => {
  const { post } = post2;
  const { push } = useRouter();
  return (
    <Card
      key={post.id}
      isPressable
      fullWidth
      isFooterBlurred
      onPress={() => push(`/posts/${post.id}`)}
      style={{ maxHeight: "250px", width: "300px", margin: "5px" }}
    >
      <Image
        isZoomed
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={post.image ?? "/dark_logo.png"}
      />
      <CardFooter className="z-10 top-1 flex-col !items-start">
        <h5 style={{ marginTop: 0 }}>{post.title}</h5>
      </CardFooter>
    </Card>
  );
};
