"use client";

import articles from "@/utils/articles";
import { Card, CardBody } from "@heroui/react";
import Link from "next/link";

export const ArticlesList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "75%",
      }}
    >
      {articles.map((article, index) => {
        return (
          <Card
            key={index}
            style={{ margin: "10px" }}
            as={Link}
            href={article.url}
            target="_blank"
            isHoverable
          >
            <CardBody>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{article.title}</div>
                <div>{article.author}</div>
              </div>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
};
