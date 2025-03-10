import { Stack } from "@mantine/core";
import TopCarousel from "../components/Homepage/TopCarousel";
import TwoColumns from "../layouts/TwoColumns";
import TopArticles from "../components/Homepage/TopArticles";
import Articles from "../components/Homepage/Articles";
import SidebarHomepage from "../components/Homepage/SidebarHomepage";

const Homepage = () => {
  return (
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
  );
};

export default Homepage;
