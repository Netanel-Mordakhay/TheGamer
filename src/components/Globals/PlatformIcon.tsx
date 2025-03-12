import { Badge } from "@mantine/core";

interface Props {
  platform: "pc" | "ps4" | "ps5" | "xboxone" | "xboxseries" | "nswitch";
}

const platformColor = {
  pc: "gray",
  ps4: "#00A8E2",
  ps5: "#0070CC",
  xboxone: "#92C83E",
  xboxseries: "#0C7A1F",
  nswitch: "#FF000F",
};

const platformName = {
  pc: "PC",
  ps4: "PS4",
  ps5: "PS5",
  xboxone: "Xbox One",
  xboxseries: "Xbox Series",
  nswitch: "Nintendo Switch",
};

const PlatformIcon = ({ platform }: Props) => {
  const badgeColor = platformColor[platform];
  const platformTitle = platformName[platform];
  return (
    <Badge color={badgeColor} radius="xs" size="md">
      {platformTitle}
    </Badge>
  );
};

export default PlatformIcon;
