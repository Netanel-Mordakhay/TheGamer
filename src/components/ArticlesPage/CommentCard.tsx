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
        <Stack mt={20} gap={5}>
          <Group>
            <Text fw={500}>{comment.user}</Text>
            <Text className="medium-opacity">•</Text>
            <Text className="medium-opacity">
              {new Date(comment.timestamp).toLocaleDateString()}
            </Text>
          </Group>
          <Text>{comment.text}</Text>
        </Stack>
      </Group>
    </Card>
  );
};

export default CommentCard;
