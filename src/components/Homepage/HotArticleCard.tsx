import {
  IconBrandFacebook,
  IconBrandX,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import classes from "../../styles/HotArticleCard.module.css";

const HotArticleCard = () => {
  const linkProps = {
    href: "https://mantine.dev",
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="sm" className={classes.card}>
      <Card.Section mb={10}>
        <a {...linkProps}>
          <Image src="https://i.imgur.com/Cij5vdL.png" height={220} />
        </a>
      </Card.Section>

      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        popular this week
      </Badge>

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        Resident Evil Village review
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={3}>
        Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but
        takes a very different direction to its predecessor.
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Text fz="xs" inline>
            Netanel Mordakhay
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconBrandFacebook size={16} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBrandX size={16} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBrandWhatsapp size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
};

export default HotArticleCard;
