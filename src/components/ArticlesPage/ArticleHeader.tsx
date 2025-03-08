import {
  BackgroundImage,
  Box,
  Title,
  Stack,
  Group,
  Text,
  Divider,
} from "@mantine/core";

interface Props {
  title: string;
  imageURL: string;
  description: string;
}

const ArticleHeader = ({ title, imageURL, description }: Props) => {
  return (
    <Box>
      <BackgroundImage src={imageURL} h={420}>
        <div className="article-header-image-gradient">
          <Stack
            p={10}
            justify="flex-end"
            h="100%"
            className="title-gray"
            gap={0}
          >
            <Title>{title}</Title>
            <Divider my={5} opacity={0.3} />
            <Group className="medium-opacity">
              <Text>Netanel Mordakhay</Text>
              <Text>•</Text>
              <Text>Feb 6th, 2025</Text>
            </Group>
          </Stack>
        </div>
      </BackgroundImage>
      <Title size="xl" my={10}>
        {description}
      </Title>
    </Box>
  );
};

export default ArticleHeader;
