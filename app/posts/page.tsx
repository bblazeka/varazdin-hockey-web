import { PostCard } from "@/components/post-card";
import { title } from "@/components/primitives";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export function getPosts() {
  const allPostsData = getSortedPostsData();
  return { allPostsData };
}

export default function BlogPage() {
  const { allPostsData } = getPosts();
  return (
    <div>
      <h1 className={title()}>Novosti</h1>
      {allPostsData.map((post) => {
        return <PostCard post={post} />;
      })}
    </div>
  );
}
