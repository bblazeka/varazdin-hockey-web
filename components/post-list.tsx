"use client";
import { PostCard } from "@/components/post-card";
import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import styled from "styled-components";

const PostsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

type TProps = {
  readonly posts: any[];
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
