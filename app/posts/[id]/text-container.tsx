"use client";
import styled from "styled-components";

const PostTextContainer = styled.section`
  padding: 1em;
`;

type TTextContainerProps = {
  readonly content: string;
};

export default function TextContainer({ content }: TTextContainerProps) {
  return (
    <PostTextContainer>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PostTextContainer>
  );
}
