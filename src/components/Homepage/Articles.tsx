import useArticles from "../../hooks/useArticles";
import useAuthor from "../../hooks/useAuthors";
import { Stack } from "@mantine/core";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const { news } = useArticles();

  return (
    <Stack>
      {news.map((article) => {
        const author = useAuthor(article.authorId);
        return (
          <ArticleCard
            title={article.title}
            description={article.description}
            author={author?.name}
            imageURL={article.imageURL}
          />
        );
      })}
    </Stack>
  );
};

export default Articles;
