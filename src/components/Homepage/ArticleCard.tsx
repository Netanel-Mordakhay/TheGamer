import { Box, Card, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import type { Comment } from "../../mock/mockData";

interface Props {
  title: string;
  description: string;
  author: string | undefined;
  imageURL: string;
  id: number;
  comments: Comment[];
}

const ArticleCard = ({
  title,
  description,
  author,
  imageURL,
  id,
  comments,
}: Props) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Link to={`article/${id}`} style={{ textDecoration: "none" }}>
      <Card withBorder radius="xs" p={0} className="article-card">
        {isSmallScreen ? (
          <Stack gap="sm">
            <Image src={imageURL} mah={200} />
            <Box px={10} pb={10}>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                - news
              </Text>
              <Text mt="xs" mb="md" size="xl" fw={700}>
                {title}
              </Text>
              <Text mt="xs" mb="md">
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
                  {comments.length} Comments
                </Text>
              </Group>
            </Box>
          </Stack>
        ) : (
          <Group wrap="nowrap" gap={15}>
            <Image src={imageURL} h={170} />
            <Stack gap={0} justify="space-between" mih={130}>
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
                  {comments.length} Comments
                </Text>
              </Group>
            </Stack>
          </Group>
        )}
      </Card>
    </Link>
  );
};

export default ArticleCard;
