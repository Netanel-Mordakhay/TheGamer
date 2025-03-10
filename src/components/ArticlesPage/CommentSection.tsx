import { Stack } from "@mantine/core";
import SectionHeader from "../Globals/SectionHeader";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { Comment } from "../../mock/mockData";

interface Props {
  comments: Comment[];
}

const CommentSection = ({ comments }: Props) => {
  return (
    <Stack>
      <SectionHeader title="Comments" />
      <CommentForm />
      {/* Map each comment to a new CommentCard */}
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Stack>
  );
};

export default CommentSection;
