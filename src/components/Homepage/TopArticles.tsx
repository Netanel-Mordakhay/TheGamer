import { Box, SimpleGrid, Stack } from "@mantine/core";
import useArticles from "../../hooks/useArticles";
import useAuthor from "../../hooks/useAuthors";
import useComments from "../../hooks/useComments";
import TopArticleCard from "./TopArticleCard";
import SectionHeader from "../Globals/SectionHeader";

const TopArticles = () => {
  const { topArticles } = useArticles();
  const latestTopArticles = topArticles.slice(-3).reverse();

  return (
    <Stack>
      <Box hiddenFrom="md">
        <SectionHeader title="Top Stories" />
      </Box>
      <SimpleGrid cols={{ base: 1, md: 3 }}>
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
    </Stack>
  );
};

export default TopArticles;
