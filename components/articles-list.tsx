import articles from "@/utils/articles";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";

export const ArticlesList = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {articles.map((article) => {
          return (
            <Card
              style={{ maxWidth: "200px", margin: "10px" }}
              as={Link}
              href={article.url}
              target="_blank"
              isHoverable
            >
              <CardBody>{article.title}</CardBody>
              <Divider />
              <CardFooter>{article.author}</CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};
