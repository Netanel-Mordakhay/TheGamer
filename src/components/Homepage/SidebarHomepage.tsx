import { Stack } from "@mantine/core";
import SidebarBox from "../Globals/SidebarBox";
import LatestReviews from "./LatestReviews";
import HotArticleCard from "./HotArticleCard";

const SidebarHomepage = () => {
  return (
    <Stack>
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
