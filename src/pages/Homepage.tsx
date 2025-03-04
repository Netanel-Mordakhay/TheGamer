import { Stack } from "@mantine/core";
import DefaultLayout from "../layouts/DefaultLayout";
import TopCarousel from "../components/Homepage/TopCarousel";
import TwoColumns from "../layouts/TwoColumns";
import ArticleCard from "../components/Homepage/ArticleCard";

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
          </Stack>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            temporibus eum ex reiciendis quis ab tenetur, deserunt minus illum
            exercitationem.
          </div>
        </TwoColumns>
      </Stack>
    </DefaultLayout>
  );
};

export default Homepage;
