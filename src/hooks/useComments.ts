import { useMemo } from "react";
import { comments } from "../mock/mockData";
import type { Comment } from "../mock/mockData";

const useComments = (articleId: number): Comment[] => {
  const filteredComments = useMemo(() => {
    return comments.filter((comment) => comment.articleId === articleId);
  }, [articleId]);

  return filteredComments;
};

export default useComments;
