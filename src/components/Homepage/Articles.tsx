import useArticles from "../../hooks/useArticles";
import useAuthor from "../../hooks/useAuthors";
import useComments from "../../hooks/useComments";
import { Button, Divider, Stack } from "@mantine/core";
import ArticleCard from "./ArticleCard";
import SectionHeader from "../Globals/SectionHeader";
import { Link } from "react-router-dom";

const Articles = () => {
  const { news } = useArticles();
  const latestNews = news.slice(-8);

  return (
    <Stack>
      <SectionHeader title="News" />

      {/* Article's stack, mapper */}
      {latestNews.map((article, index) => {
        const author = useAuthor(article.authorId);
        const comments = useComments(article.id);
        return (
          <>
            <ArticleCard
              key={article.id}
              article={article}
              comments={comments}
              author={author}
            />
            {index < latestNews.length - 1 && <Divider />}
          </>
        );
      })}

      {/* Read more button */}
      <Link to="/articles" style={{ textDecoration: "none" }}>
        <Button fullWidth>More...</Button>
      </Link>
    </Stack>
  );
};

export default Articles;
