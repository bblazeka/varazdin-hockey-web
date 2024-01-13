import { title } from "@/components/primitives";
import { getPostData } from "@/lib/posts";
import TextContainer from "@/app/posts/[id]/text-container";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const postData = await getPostData(id);

  return (
    <>
      <h1 className={title()}>{postData.title}</h1>
      <TextContainer content={postData.contentHtml} />
    </>
  );
}
