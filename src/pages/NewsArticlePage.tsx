import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import useComments from "../hooks/useComments";
import { Stack, Box, Divider } from "@mantine/core";
import DefaultLayout from "../layouts/DefaultLayout";
import SidebarHomepage from "../components/Homepage/SidebarHomepage";
import TwoColumns from "../layouts/TwoColumns";
import ArticleHeader from "../components/ArticlesPage/ArticleHeader";
import CommentSection from "../components/ArticlesPage/CommentSection";

const NewsArticlePage = () => {
  const { id } = useParams();
  const { news } = useArticles();
  const article = news.find((a) => a.id === Number(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  {
    /* Get the relavent comment's list */
  }
  const comments = useComments(article.id);

  return (
    <DefaultLayout>
      <TwoColumns>
        {/* Left column */}
        <Stack gap={0}>
          <ArticleHeader
            title={article.title}
            imageURL={article.imageURL}
            description={article.description}
          ></ArticleHeader>
          <Box>
            <Divider size="sm" color="orange" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              vero ipsam soluta! Commodi optio eius, deserunt nostrum,
              asperiores unde quis neque ea architecto aliquid sequi maiores
              molestias itaque doloremque, pariatur veniam. Quis, tempore
              aliquam quasi perspiciatis odio inventore adipisci blanditiis, ad
              repellendus fugit neque voluptatum qui corporis earum. Labore
              nobis optio iste tenetur vero est libero! Consequatur aspernatur
              omnis eveniet.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem tempore explicabo voluptates dicta! Praesentium
              voluptas animi laudantium libero illo laboriosam error voluptatum
              atque doloremque pariatur nisi dolorem aspernatur odit, provident
              vitae ratione itaque inventore! A totam eos repellat nostrum id,
              nemo omnis, sunt modi aliquam qui, quis iure ipsam minus pariatur?
              Sunt sint repellat ea cupiditate in excepturi at nihil dignissimos
              nisi ipsum eveniet commodi, odio quod animi accusamus? Iusto,
              sint. Ad repellat asperiores nam rerum numquam illo quos nisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officiis ut est quod ratione quasi maxime ducimus esse
              odio neque perspiciatis eius vel, inventore similique ipsam
              numquam nostrum explicabo. Dolor debitis corporis officiis
              obcaecati architecto? Qui saepe quam suscipit necessitatibus
              asperiores distinctio laudantium non minima velit dolorem
              quibusdam magni, aspernatur et fugit labore assumenda, corrupti
              rerum quae quos obcaecati molestiae voluptas. Necessitatibus iste
              quis provident vero quibusdam repellat magni nostrum.
            </p>
          </Box>
          <CommentSection comments={comments} />
        </Stack>
        {/* Right column */}
        <SidebarHomepage />
      </TwoColumns>
    </DefaultLayout>
  );
};

export default NewsArticlePage;
