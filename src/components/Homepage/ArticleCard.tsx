import { Avatar, Card, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks"; // כדי לזהות גודל מסך
import classes from "../../styles/ArticleCard.module.css";

interface Props {
  title: string;
  description: string;
  author: string | undefined;
  imageURL: string;
}

const ArticleCard = ({ title, description, author, imageURL }: Props) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // מסכים קטנים

  return (
    <Card withBorder radius="xs" p={0} className={classes.card}>
      {isSmallScreen ? (
        <Stack gap="sm">
          <Image src={imageURL} mah={200} />
          <div className={classes.body}>
            <Text tt="uppercase" c="dimmed" fw={700} size="xs">
              - news
            </Text>
            <Text className={classes.title} mt="xs" mb="md" size="xl" fw={700}>
              {title}
            </Text>
            <Text className={classes.description} mt="xs" mb="md">
              {description}
            </Text>
            <Group gap="xs" wrap="nowrap">
              <Text size="xs">{author}</Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                3 Comments
              </Text>
            </Group>
          </div>
        </Stack>
      ) : (
        <Group wrap="nowrap" gap={15}>
          <Image src={imageURL} h={170} />
          <Stack
            className={classes.body}
            gap={0}
            justify="space-between"
            mih={130}
          >
            <div>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                - news
              </Text>
              <Text size="xl" fw={700}>
                {title}
              </Text>
              <Text lineClamp={2}>{description}</Text>
            </div>
            <Group gap="xs" wrap="nowrap">
              <Text size="xs">{author}</Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                3 Comments
              </Text>
            </Group>
          </Stack>
        </Group>
      )}
    </Card>
  );
};

export default ArticleCard;
