import { useMemo } from "react";
import { articles } from "../mock/mockData";
import type { Article } from "../mock/mockData";

const useArticles = (): {
  reviews: Article[];
  featured: Article[];
  topArticles: Article[];
  news: Article[];
} => {
  const sortedArticles = useMemo(() => {
    return {
      reviews: articles.filter((article: Article) => article.review === true),
      featured: articles.filter(
        (article: Article) => article.featured === true
      ),
      topArticles: articles.filter(
        (article: Article) => article.topArticle === true
      ),
      news: articles.filter(
        (article: Article) =>
          article.review === false &&
          article.featured === false &&
          article.topArticle === false
      ),
    };
  }, [articles]);

  return sortedArticles;
};

export default useArticles;
