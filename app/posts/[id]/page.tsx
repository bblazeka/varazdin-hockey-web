import { title } from "@/components/primitives";
import { getPostData } from "@/lib/posts";
import TextContainer from "@/app/posts/[id]/text-container";
import { PageProps } from "@/.next/types/app/page";

export default async function Page(props: PageProps) {
  const postData = await getPostData((await props.params)?.id ?? "");

  if (!postData) {
    return <>Error</>;
  }

  return (
    <>
      <h1 className={title()}>{postData.title}</h1>
      <TextContainer content={postData.contentHtml} />
    </>
  );
}
