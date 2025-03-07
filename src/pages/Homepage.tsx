import { Button, Stack } from "@mantine/core";
import DefaultLayout from "../layouts/DefaultLayout";
import TopCarousel from "../components/Homepage/TopCarousel";
import TwoColumns from "../layouts/TwoColumns";
import TopArticles from "../components/Homepage/TopArticles";
import Articles from "../components/Homepage/Articles";
import SectionHeader from "../components/Globals/SectionHeader";
import SidebarHomepage from "../components/Homepage/SidebarHomepage";

const Homepage = () => {
  return (
    <DefaultLayout>
      <Stack>
        <TopCarousel />
        <TwoColumns>
          {/* Left column */}
          <Stack>
            <TopArticles />
            <Articles />
          </Stack>
          {/* Right column */}
          <SidebarHomepage />
        </TwoColumns>
      </Stack>
    </DefaultLayout>
  );
};

export default Homepage;
