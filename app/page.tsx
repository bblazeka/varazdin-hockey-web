import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { redirect } from "next/navigation";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { getSortedPostsData } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export function getPosts() {
  const allPostsData = getSortedPostsData();
  return { allPostsData };
}

export default function Home() {
  const { allPostsData } = getPosts();
  const postsToDisplay = allPostsData
    .sort((a, b) => a.date - b.date)
    .slice(0, 3);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className={title()}>Novosti</h2>
      <div
        className="mt-8"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {postsToDisplay.map((post) => {
          return <PostCard post={post} />;
        })}
      </div>
    </section>
  );
}
