import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import { Title, Text, Image, Stack } from "@mantine/core";
import DefaultLayout from "../layouts/DefaultLayout";
import SidebarHomepage from "../components/Homepage/SidebarHomepage";
import TwoColumns from "../layouts/TwoColumns";
import OneColumn from "../layouts/OneColumn";

const ReviewArticlePage = () => {
  const { id } = useParams();
  const { reviews } = useArticles();
  const review = reviews.find((r) => r.id === Number(id));

  if (!review) {
    return <p>Review not found</p>;
  }

  return (
    <DefaultLayout>
      <OneColumn>
        <Stack>
          <Title>{review.title}</Title>
          <Image src={review.imageURL} alt={review.title} />
          <Text>{review.description}</Text>
        </Stack>
      </OneColumn>
    </DefaultLayout>
  );
};

export default ReviewArticlePage;
