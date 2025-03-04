import {
  BackgroundImage,
  Box,
  Group,
  Stack,
  Title,
  Text,
  RingProgress,
  Button,
} from "@mantine/core";
import reviewArticles from "../../mock/reviewArticles";
import classes from "../../styles/LatestReviews.module.css";

const LatestReviews = () => (
  <>
    <Box p={10} bg="dark" className={classes.latestReviews}>
      <Title size="xl" c="gray" mb={10}>
        Latest Reviews
      </Title>
      {reviewArticles.map((reviewArticle) => (
        <Box key={reviewArticle.id}>
          <BackgroundImage src={reviewArticle.imageURL}>
            <Box className={classes.reviewBox}>
              <Group
                justify="space-between"
                wrap="nowrap"
                p={10}
                className={classes.gameReviewBox}
              >
                <Stack justify="flex-end" h={100} gap={0}>
                  <Title size={16}>{reviewArticle.title}</Title>
                  <Text size="xs" opacity={0.8}>
                    Feb 6th
                  </Text>
                </Stack>
                <RingProgress
                  size={60}
                  thickness={5}
                  sections={[{ value: 80, color: "orange" }]}
                  label={
                    <Text fw={700} ta="center" size="xs">
                      80%
                    </Text>
                  }
                />
              </Group>
            </Box>
          </BackgroundImage>
        </Box>
      ))}
      <Button
        mt={10}
        fullWidth
        variant="gradient"
        gradient={{ from: "orange", to: "yellow", deg: 90 }}
      >
        All Reviews
      </Button>
    </Box>
  </>
);

export default LatestReviews;
