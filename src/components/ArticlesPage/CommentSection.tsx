import { Avatar, Card, Text, Group, Stack } from "@mantine/core";
import SectionHeader from "../Globals/SectionHeader";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const CommentSection = () => {
  return (
    <Stack>
      <SectionHeader title="Comments" />
      <CommentForm />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </Stack>
  );
};

export default CommentSection;
