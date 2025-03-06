import { SimpleGrid } from "@mantine/core";
import useArticles from "../../hooks/useArticles";
import useWriter from "../../hooks/useAuthors";
import TopArticleCard from "./TopArticleCard";

const TopArticles = () => {
  const { topArticles } = useArticles();
  const latestTopArticles = topArticles.slice(-3).reverse();

  return (
    <SimpleGrid cols={3}>
      {latestTopArticles.map((article) => {
        const author = useWriter(article.authorId);
        return (
          <TopArticleCard
            key={article.id}
            title={article.title}
            imageURL={article.imageURL}
            author={author?.name || ""}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default TopArticles;
