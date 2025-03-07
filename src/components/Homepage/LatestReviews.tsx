import { Link } from "react-router-dom";
import useArticles from "../../hooks/useArticles";
import LatestReviewCard from "./LatestReviewCard";

const LatestReviews = () => {
  const { reviews } = useArticles();
  const latestReviews = reviews.slice(-5).reverse();

  return latestReviews.map((reviewArticle) => (
    <Link to={`/review/${reviewArticle.id}`} style={{ textDecoration: "none" }}>
      <LatestReviewCard
        key={reviewArticle.id}
        title={reviewArticle.title}
        imageURL={reviewArticle.imageURL}
        rating={reviewArticle.rating}
      />
    </Link>
  ));
};

export default LatestReviews;
