import { Stack } from "@mantine/core";
import SidebarBox from "../Globals/SidebarBox";
import LatestReviews from "./LatestReviews";
import HotArticleCard from "./HotArticleCard";
import SidebarIconList from "../Globals/SidebarIconList";

const SidebarHomepage = () => {
  return (
    <Stack>
      {/* Social icons */}
      <SidebarIconList />
      {/* Latest reviews */}
      <SidebarBox title="Latest Reviews" buttonText="All Reviews" dark={true}>
        <LatestReviews />
      </SidebarBox>
      {/* Hot article (week's most popular) */}
      <HotArticleCard />
    </Stack>
  );
};

export default SidebarHomepage;
