import { Button, Divider, SimpleGrid, Stack } from "@mantine/core";
import DefaultLayout from "../layouts/DefaultLayout";
import TopCarousel from "../components/Homepage/TopCarousel";
import TwoColumns from "../layouts/TwoColumns";
import ArticleCard from "../components/Homepage/ArticleCard";
import LatestReviews from "../components/Homepage/LatestReviews";
import HotArticleCard from "../components/Homepage/HotArticleCard";
import TopArticleCard from "../components/Homepage/TopArticleCard";
import LatestComments from "../components/Homepage/LatestComments";
import TopArticles from "../components/Homepage/TopArticles";

const Homepage = () => {
  return (
    <DefaultLayout>
      <Stack>
        <TopCarousel />
        <TwoColumns>
          <Stack>
            <TopArticles />
            <Divider color="orange" size="sm" />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <Button
              variant="gradient"
              gradient={{ from: "orange", to: "yellow", deg: 90 }}
            >
              More...
            </Button>
          </Stack>
          <Stack>
            <LatestReviews />
            <HotArticleCard />
            <LatestComments />
          </Stack>
        </TwoColumns>
      </Stack>
    </DefaultLayout>
  );
};

export default Homepage;
