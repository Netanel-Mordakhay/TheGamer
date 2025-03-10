import { Stack, Button } from "@mantine/core";
import SectionHeader from "../components/Globals/SectionHeader";
import ArticleCard from "../components/Homepage/ArticleCard";
import SidebarHomepage from "../components/Homepage/SidebarHomepage";
import useAuthor from "../hooks/useAuthors";
import useComments from "../hooks/useComments";
import TwoColumns from "../layouts/TwoColumns";
import useArticles from "../hooks/useArticles";
import { useLocation } from "react-router-dom";

const ArticleListPage = () => {
  const location = useLocation();
  const { news, featured, topArticles, reviews } = useArticles();
  const isReviewsPage = location.pathname.includes("/reviews");
  const articles = isReviewsPage
    ? reviews
    : [...news, ...featured, ...topArticles];

  return (
    <TwoColumns>
      {/* Left column */}
      <Stack>
        <SectionHeader title={isReviewsPage ? "Reviews" : "News"} />
        {/* Article's stack, mapper */}
        {articles.map((article) => {
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
      {/* Right column */}
      <SidebarHomepage />
    </TwoColumns>
  );
};

export default ArticleListPage;
