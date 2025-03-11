import { Group } from "@mantine/core";
import SocialIcon from "./SocialIcon";

const SidebarIconList = () => {
  return (
    <Group justify="space-between" wrap="nowrap" gap={10}>
      <SocialIcon platform="facebook" />
      <SocialIcon platform="x" />
      <SocialIcon platform="youtube" />
      <SocialIcon platform="instagram" />
      <SocialIcon platform="discord" />
      <SocialIcon platform="telegram" />
    </Group>
  );
};

export default SidebarIconList;
