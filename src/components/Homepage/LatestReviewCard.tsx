import {
  Box,
  Title,
  BackgroundImage,
  Group,
  Stack,
  RingProgress,
  Text,
} from "@mantine/core";

interface Props {
  title: string;
  imageURL: string;
  rating: number | null;
}

const LatestReviewCard = ({ title, imageURL, rating }: Props) => {
  return (
    <Box>
      <BackgroundImage src={imageURL}>
        <Box className="reviewBox">
          <Group
            justify="space-between"
            wrap="nowrap"
            p={10}
            className="gameReviewBox"
          >
            <Stack justify="flex-end" h={100} gap={0}>
              <Title size={16}>{title}</Title>
              <Text size="xs" opacity={0.8}>
                Feb 6th
              </Text>
            </Stack>
            <RingProgress
              size={60}
              thickness={5}
              sections={[
                { value: rating !== null ? rating * 10 : 0, color: "orange" },
              ]}
              label={
                <Text fw={700} ta="center" size="xs">
                  {rating !== null ? <p>{rating}</p> : <p></p>}
                </Text>
              }
            />
          </Group>
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default LatestReviewCard;
