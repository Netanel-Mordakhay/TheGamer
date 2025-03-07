import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
} from "@mantine/core";

const HotArticleCard = () => {
  return (
    <Card withBorder radius="sm">
      <Card.Section mb={10}>
        <a href="#">
          <Image src="https://i.imgur.com/Cij5vdL.png" height={220} />
        </a>
      </Card.Section>

      <Badge
        className="hot-article-rating"
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        popular this week
      </Badge>

      <Text fw={500}>Resident Evil Village review</Text>

      <Text fz="sm" c="dimmed" lineClamp={3}>
        Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but
        takes a very different direction to its predecessor.
      </Text>

      <Group justify="space-between">
        <Center>
          <Text fz="xs" inline>
            Netanel Mordakhay
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon>
            <IconBrandFacebook size={16} />
          </ActionIcon>
          <ActionIcon>
            <IconBrandX size={16} />
          </ActionIcon>
          <ActionIcon>
            <IconBrandWhatsapp size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default HotArticleCard;
