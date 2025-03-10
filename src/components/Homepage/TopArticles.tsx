import { SimpleGrid } from "@mantine/core";
import useArticles from "../../hooks/useArticles";
import useAuthor from "../../hooks/useAuthors";
import useComments from "../../hooks/useComments";
import TopArticleCard from "./TopArticleCard";

const TopArticles = () => {
  const { topArticles } = useArticles();
  const latestTopArticles = topArticles.slice(-3).reverse();

  return (
    <SimpleGrid cols={3}>
      {latestTopArticles.map((article) => {
        const author = useAuthor(article.authorId);
        const comments = useComments(article.id);
        return (
          <TopArticleCard
            key={article.id}
            article={article}
            author={author}
            comments={comments}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default TopArticles;
