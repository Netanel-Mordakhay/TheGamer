import { useMemo } from "react";
import { authors, Author } from "../mock/mockData";

const useAuthor = (authorId: number): Author | undefined => {
  const author = useMemo(
    () => authors.find((a) => a.id === authorId),
    [authorId]
  );

  return author;
};

export default useAuthor;
