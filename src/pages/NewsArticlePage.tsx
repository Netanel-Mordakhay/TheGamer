import { useParams } from "react-router-dom";
import useArticles from "../hooks/useArticles";
import { Title, Text, Image, Stack } from "@mantine/core";
import DefaultLayout from "../layouts/DefaultLayout";
import SidebarHomepage from "../components/Homepage/SidebarHomepage";
import TwoColumns from "../layouts/TwoColumns";

const NewsArticlePage = () => {
  const { id } = useParams();
  const { news } = useArticles();
  const article = news.find((a) => a.id === Number(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <DefaultLayout>
      <TwoColumns>
        {/* Left column */}
        <Stack>
          <Title>{article.title}</Title>
          <Image src={article.imageURL} alt={article.title} />
          <Text>{article.description}</Text>
        </Stack>
        {/* Right column */}
        <SidebarHomepage />
      </TwoColumns>
    </DefaultLayout>
  );
};

export default NewsArticlePage;
