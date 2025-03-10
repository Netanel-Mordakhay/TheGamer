import { IconMessageCircle } from "@tabler/icons-react";
import { Group, Text, Card, Box, Stack, Title } from "@mantine/core";
import { Article, Author, Comment } from "../../mock/mockData";
import { Link } from "react-router-dom";

interface Props {
  article: Article;
  author?: Author;
  comments: Comment[];
}

const TopArticleCard = ({ article, author, comments }: Props) => {
  return (
    <Link to={`/articles/${article.id}`} style={{ textDecoration: "none" }}>
      <Card shadow="md" className="upscale-container " radius="md" p={0}>
        <Box
          className="upscale-image"
          style={{ backgroundImage: `url(${article.imageURL})` }}
        />
        <Box className="upscale-overlay" />
        <Box className="upscale-content ">
          <Stack gap={0} justify="flex-end" h={180}>
            <Title size="lg" className="title-gray">
              {article.title}
            </Title>
            <Group
              justify="space-between"
              className="medium-opacity title-gray"
            >
              <Text>{author?.name || ""}</Text>
              <Group gap={5}>
                <IconMessageCircle size={16} />
                <Text>{comments.length}</Text>
              </Group>
            </Group>
          </Stack>
        </Box>
      </Card>
    </Link>
  );
};

export default TopArticleCard;
