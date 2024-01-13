"use client";
import styled from "styled-components";

const PostTextContainer = styled.section`
  padding: 1em;
`;

export default function TextContainer({ content }: any) {
  return (
    <PostTextContainer>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PostTextContainer>
  );
}
