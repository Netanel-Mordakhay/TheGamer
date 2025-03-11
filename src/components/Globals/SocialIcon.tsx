import { ActionIcon } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandTelegram,
} from "@tabler/icons-react";

interface Props {
  platform: "facebook" | "x" | "youtube" | "instagram" | "discord" | "telegram";
  disabled?: boolean;
}

const iconMap = {
  facebook: IconBrandFacebook,
  x: IconBrandX,
  youtube: IconBrandYoutube,
  instagram: IconBrandInstagram,
  discord: IconBrandDiscord,
  telegram: IconBrandTelegram,
};

const iconMapColor = {
  facebook: "#1877F2",
  x: "#000000",
  youtube: "#ff0000",
  instagram: "#C13584",
  discord: "#5865F2",
  telegram: "#24A1DE",
};

const SocialIcon = ({ platform, disabled }: Props) => {
  const IconComponent = iconMap[platform];
  const iconColor = iconMapColor[platform];

  return (
    <ActionIcon
      variant="filled"
      color={iconColor}
      radius={0}
      size="xl"
      disabled={disabled}
    >
      <IconComponent />
    </ActionIcon>
  );
};

export default SocialIcon;
