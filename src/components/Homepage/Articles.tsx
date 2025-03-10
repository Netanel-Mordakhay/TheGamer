import useArticles from "../../hooks/useArticles";
import useAuthor from "../../hooks/useAuthors";
import useComments from "../../hooks/useComments";
import { Button, Stack } from "@mantine/core";
import ArticleCard from "./ArticleCard";
import SectionHeader from "../Globals/SectionHeader";

const Articles = () => {
  const { news } = useArticles();

  return (
    <Stack>
      <SectionHeader title="News" />
      {/* Article's stack, mapper */}
      {news.map((article) => {
        const author = useAuthor(article.authorId);
        const comments = useComments(article.id);
        return (
          <ArticleCard
            key={article.id}
            article={article}
            comments={comments}
            author={author}
          />
        );
      })}
      {/* Read more button */}
      <Button
        variant="gradient"
        gradient={{ from: "orange", to: "yellow", deg: 90 }}
      >
        More...
      </Button>
    </Stack>
  );
};

export default Articles;
