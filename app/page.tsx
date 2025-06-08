import { getSortedPostsData } from "@/lib/posts";
import PostCarousel from "@/components/post-carousel";
import { ArticlesList } from "@/components/articles-list";
import styles from "./page.module.css";
import { TPostInfo } from "@/lib/types";

export default function Home() {
  const allPostsData: TPostInfo[] = getSortedPostsData();

  return (
    <section className={styles.section}>
      <PostCarousel posts={allPostsData} />
      <h3>Iz medija</h3>
      <ArticlesList />
    </section>
  );
}
