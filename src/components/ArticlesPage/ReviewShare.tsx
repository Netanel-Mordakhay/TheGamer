import { Divider, Stack } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const ReviewShare = () => {
  return (
    <Stack w={30}>
      <IconBrandFacebook size={24} />
      <Divider color="orange" />
      <IconBrandX size={24} />
      <Divider color="orange" />
      <IconBrandWhatsapp size={24} />
    </Stack>
  );
};

export default ReviewShare;
