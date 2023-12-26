import { getPostData } from "@/lib/posts";

export async function getPosts(id: string) {
  const allPostsData = await getPostData(id);
  return { allPostsData };
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const resss = await getPosts(id);
  console.log("🚀 ~ file: page.tsx:14 ~ resss:", resss);

  return (
    <>
      <h1>{id}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: resss.allPostsData.contentHtml }}
      />
    </>
  );
}
