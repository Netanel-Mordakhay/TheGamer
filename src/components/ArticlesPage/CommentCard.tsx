import { Card, Group, Avatar, Stack, Text } from "@mantine/core";
import { Comment } from "../../mock/mockData";

interface Props {
  comment: Comment;
}

const CommentCard = ({ comment }: Props) => {
  return (
    <Card className="comment-card" radius="sm" mih={170}>
      <Group align="flex-start" wrap="nowrap">
        <Avatar variant="light" radius={70} size={140} />
        <Stack mt={20} gap={15}>
          <Group>
            <Text>{comment.user}</Text>
            <Text>{new Date(comment.timestamp).toLocaleDateString()}</Text>
          </Group>
          <Text>{comment.text}</Text>
        </Stack>
      </Group>
    </Card>
  );
};

export default CommentCard;
