import { getPostData } from "@/lib/posts";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const allPostsData = await getPostData(id);

  return (
    <>
      <h1>{id}</h1>
      <div dangerouslySetInnerHTML={{ __html: allPostsData.contentHtml }} />
    </>
  );
}
