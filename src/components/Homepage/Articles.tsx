import useArticles from "../../hooks/useArticles";
import useAuthor from "../../hooks/useAuthors";
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
        return (
          <ArticleCard
            title={article.title}
            description={article.description}
            author={author?.name}
            imageURL={article.imageURL}
            id={article.id}
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
