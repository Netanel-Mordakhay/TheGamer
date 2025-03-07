import { Stack } from "@mantine/core";
import SidebarBox from "../Globals/SidebarBox";
import LatestReviews from "./LatestReviews";
import HotArticleCard from "./HotArticleCard";

const SidebarHomepage = () => {
  return (
    <Stack>
      <SidebarBox title="Latest Reviews" buttonText="All Reviews" dark={true}>
        <LatestReviews />
      </SidebarBox>
      <HotArticleCard />
      <SidebarBox
        title="Latest Comments"
        buttonText="All Comments"
        dark={false}
      >
        asd
      </SidebarBox>
    </Stack>
  );
};

export default SidebarHomepage;
