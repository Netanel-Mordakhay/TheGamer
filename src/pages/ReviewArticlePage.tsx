import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import { Stack, Box, Divider, Group } from "@mantine/core";
import OneColumn from "../layouts/OneColumn";
import ReviewHeader from "../components/ArticlesPage/ReviewHeader";
import ReviewSummary from "../components/ArticlesPage/ReviewSummary";
import ReviewShare from "../components/ArticlesPage/ReviewShare";
import CommentSection from "../components/ArticlesPage/CommentSection";
import useComments from "../hooks/useComments";
import DefaultLayout from "../layouts/DefaultLayout";

const ReviewArticlePage = () => {
  const { id } = useParams();
  const { reviews } = useArticles();
  const review = reviews.find((r) => r.id === Number(id));

  if (!review) {
    return <p>Review not found</p>;
  }

  {
    /* Get the relavent comment's list */
  }
  const comments = useComments(review.id);

  return (
    <OneColumn>
      <Stack gap={0}>
        <ReviewHeader
          title={review.title}
          imageURL={review.imageURL}
          description={review.description}
        />
        <Stack px={100}>
          <Group wrap="nowrap" align="flex-start">
            <ReviewShare />
            <Box>
              <Divider size="sm" color="orange" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                vero ipsam soluta! Commodi optio eius, deserunt nostrum,
                asperiores unde quis neque ea architecto aliquid sequi maiores
                molestias itaque doloremque, pariatur veniam. Quis, tempore
                aliquam quasi perspiciatis odio inventore adipisci blanditiis,
                ad repellendus fugit neque voluptatum qui corporis earum. Labore
                nobis optio iste tenetur vero est libero! Consequatur aspernatur
                omnis eveniet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem tempore explicabo voluptates dicta! Praesentium
                voluptas animi laudantium libero illo laboriosam error
                voluptatum atque doloremque pariatur nisi dolorem aspernatur
                odit, provident vitae ratione itaque inventore! A totam eos
                repellat nostrum id, nemo omnis, sunt modi aliquam qui, quis
                iure ipsam minus pariatur? Sunt sint repellat ea cupiditate in
                excepturi at nihil dignissimos nisi ipsum eveniet commodi, odio
                quod animi accusamus? Iusto, sint. Ad repellat asperiores nam
                rerum numquam illo quos nisi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis officiis ut est quod ratione quasi maxime ducimus
                esse odio neque perspiciatis eius vel, inventore similique ipsam
                numquam nostrum explicabo. Dolor debitis corporis officiis
                obcaecati architecto? Qui saepe quam suscipit necessitatibus
                asperiores distinctio laudantium non minima velit dolorem
                quibusdam magni, aspernatur et fugit labore assumenda, corrupti
                rerum quae quos obcaecati molestiae voluptas. Necessitatibus
                iste quis provident vero quibusdam repellat magni nostrum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                vero ipsam soluta! Commodi optio eius, deserunt nostrum,
                asperiores unde quis neque ea architecto aliquid sequi maiores
                molestias itaque doloremque, pariatur veniam. Quis, tempore
                aliquam quasi perspiciatis odio inventore adipisci blanditiis,
                ad repellendus fugit neque voluptatum qui corporis earum. Labore
                nobis optio iste tenetur vero est libero! Consequatur aspernatur
                omnis eveniet.
              </p>
            </Box>
          </Group>
          <ReviewSummary
            imageURL={review.imageURL}
            rating={review.rating}
          ></ReviewSummary>

          <CommentSection comments={comments} />
        </Stack>
      </Stack>
    </OneColumn>
  );
};

export default ReviewArticlePage;
