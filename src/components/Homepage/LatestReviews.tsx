import { Box, Title, Button, Space } from "@mantine/core";
import useArticles from "../../hooks/useArticles";
import LatestReviewCard from "./LatestReviewCard";
import classes from "../../styles/LatestReviews.module.css";
import SectionHeader from "../Globals/SectionHeader";

const LatestReviews = () => {
  const { reviews } = useArticles();
  const latestReviews = reviews.slice(-5).reverse();

  return (
    <Box p={10} bg="dark" className={classes.latestReviews}>
      {/* 
      <Title size="xl" c="gray" mb={10}>
        Latest Reviews
      </Title>
      */}
      <SectionHeader title="Latest Reviews" />
      <Space h="md" />
      {latestReviews.map((reviewArticle) => (
        <LatestReviewCard
          key={reviewArticle.id}
          title={reviewArticle.title}
          imageURL={reviewArticle.imageURL}
          rating={reviewArticle.rating}
        />
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
  );
};

export default LatestReviews;
