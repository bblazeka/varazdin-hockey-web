"use client";
import { PostCard } from "@/components/post-card";
import styled from "styled-components";
import { TPostInfo } from "@/lib/types";

const PostsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

type TProps = {
  readonly posts: TPostInfo[];
};

export default function PostList({ posts }: TProps) {
  return (
    <PostsContainer>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </PostsContainer>
  );
}
