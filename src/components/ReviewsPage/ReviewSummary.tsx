import {
  BackgroundImage,
  Box,
  Group,
  List,
  RingProgress,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconProgressCheck, IconProgressX } from "@tabler/icons-react";

interface Props {
  imageURL: string;
  rating: number | null;
}

const ReviewSummary = ({ imageURL, rating }: Props) => {
  return (
    <Box mih={300} className="text-gray">
      <BackgroundImage
        src={imageURL}
        mih={300}
        radius="lg"
        style={{ overflow: "hidden" }}
      >
        <Group
          align="center"
          justify="center"
          mih={300}
          className="reviewSummaryBox"
          fw={500}
          p={20}
          gap={30}
        >
          {/* Rating ring */}
          <RingProgress
            size={200}
            thickness={20}
            sections={[
              { value: rating !== null ? rating * 10 : 0, color: "orange" },
            ]}
            label={
              <Text fw={700} ta="center" size="48px">
                {rating !== null ? <p>{rating}</p> : <p></p>}
              </Text>
            }
          />

          {/* Pros */}
          <Stack>
            <Title>Pros</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="green" size={24} radius="xl">
                  <IconProgressCheck size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
            </List>
          </Stack>

          {/* Cons */}
          <Stack>
            <Title>Cons</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={
                <ThemeIcon color="red" size={24} radius="xl">
                  <IconProgressX size={16} />
                </ThemeIcon>
              }
            >
              <List.Item>Clone or download repository from GitHub</List.Item>
              <List.Item>Install dependencies with yarn</List.Item>
              <List.Item>
                To start development server run npm start command
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
              <List.Item>
                Run tests to make sure your changes do not break the build
              </List.Item>
            </List>
          </Stack>
        </Group>
      </BackgroundImage>
    </Box>
  );
};

export default ReviewSummary;
