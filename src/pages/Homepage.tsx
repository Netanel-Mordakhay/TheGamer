import { Button, SimpleGrid, Stack } from "@mantine/core";
import DefaultLayout from "../layouts/DefaultLayout";
import TopCarousel from "../components/Homepage/TopCarousel";
import TwoColumns from "../layouts/TwoColumns";
import ArticleCard from "../components/Homepage/ArticleCard";
import LatestReviews from "../components/Homepage/LatestReviews";
import HotArticleCard from "../components/Homepage/HotArticleCard";

const Homepage = () => {
  return (
    <DefaultLayout>
      <Stack>
        <TopCarousel />
        <TwoColumns>
          <Stack>
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
          </Stack>
        </TwoColumns>
      </Stack>
    </DefaultLayout>
  );
};

export default Homepage;
