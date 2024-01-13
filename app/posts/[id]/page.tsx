import { title } from "@/components/primitives";
import { getPostData } from "@/lib/posts";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const postData = await getPostData(id);

  return (
    <>
      <h1 className={title()}>{postData.title}</h1>
      <section>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
    </>
  );
}
