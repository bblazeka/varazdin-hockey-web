import { title } from "@/components/primitives";
import { getPostData } from "@/lib/posts";
import TextContainer from "@/app/posts/[id]/text-container";
import { PageProps } from "@/.next/types/app/page";

export default async function Page(props: PageProps) {
  const idProp = (await props.params)?.id;
  if (!idProp) {
    return <>Error: Post ID is missing</>;
  }

  const postData = await getPostData(idProp);

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
