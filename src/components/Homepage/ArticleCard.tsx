import { Box, Card, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import type { Article, Comment, Author } from "../../mock/mockData";

interface Props {
  article: Article;
  comments: Comment[];
  author?: Author;
}

const ArticleCard = ({ article, comments, author }: Props) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <Link to={`articles/${article.id}`} style={{ textDecoration: "none" }}>
      <Card withBorder radius="xs" p={0} className="article-card">
        {isSmallScreen ? (
          <Stack gap="sm">
            <Image src={article.imageURL} mah={200} />
            <Box px={10} pb={10}>
              <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                - news
              </Text>
              <Text mt="xs" mb="md" size="xl" fw={700}>
                {article.title}
              </Text>
              <Text mt="xs" mb="md">
                {article.description}
              </Text>
              <Group gap="xs" wrap="nowrap">
                <Text size="xs">{author?.name || ""}</Text>
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
            <Image src={article.imageURL} h={170} />
            <Stack gap={0} justify="space-between" mih={130}>
              <div>
                <Text tt="uppercase" c="dimmed" fw={700} size="xs">
                  - news
                </Text>
                <Text size="xl" fw={700}>
                  {article.title}
                </Text>
                <Text lineClamp={2}>{article.description}</Text>
              </div>
              <Group gap="xs" wrap="nowrap">
                <Text size="xs">{author?.name || ""}</Text>
                <Text size="xs" c="dimmed">
                  •
                </Text>
                <Text size="xs" c="dimmed">
                  {new Date(article.timestamp).toLocaleDateString()}
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
