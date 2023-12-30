"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const PostCard = (post2: any) => {
  const { post } = post2;
  console.log("🚀 ~ file: post-card.tsx:6 ~ PostCard ~ post:", post);
  const { push } = useRouter();
  return (
    <Card
      key={post.id}
      isPressable
      onPress={() => push(`/posts/${post.id}`)}
      style={{ maxHeight: "300px", maxWidth: "300px", margin: "5px" }}
    >
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{post.subtitle}</p>
        <h4 className="font-medium text-large">{post.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          src={post.image ?? "/dark_logo.png"}
          width={270}
        />
      </CardBody>
    </Card>
  );
};
