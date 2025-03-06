import { IconMessageCircle } from "@tabler/icons-react";
import { Group, Text, Card, Box, Stack, Title } from "@mantine/core";

interface Props {
  title: string;
  imageURL: string;
  author: string;
}

const TopArticleCard = ({ title, imageURL, author }: Props) => {
  return (
    <Card shadow="md" className="upscale-container " radius="md" p={0}>
      <Box
        className="upscale-image"
        style={{ backgroundImage: `url(${imageURL})` }}
      />
      <Box className="upscale-overlay" />
      <Box className="upscale-content ">
        <Stack gap={0} justify="flex-end" h={180}>
          <Title size="lg" className="top-article">
            {title}
          </Title>
          <Group justify="space-between" className="medium-opacity top-article">
            <Text>{author}</Text>
            <Group gap={5}>
              <IconMessageCircle size={16} />
              <Text>7</Text>
            </Group>
          </Group>
        </Stack>
      </Box>
    </Card>
  );
};

export default TopArticleCard;
