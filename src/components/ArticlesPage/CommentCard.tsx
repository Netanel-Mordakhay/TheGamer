import { Card, Group, Avatar, Stack, Text } from "@mantine/core";

const CommentCard = () => {
  return (
    <Card className="comment-card" radius="sm" mih={170}>
      <Group align="flex-start" wrap="nowrap">
        <Avatar variant="light" radius={70} size={140} />
        <Stack mt={20} gap={15}>
          <Group>
            <Text>Nati Mordakhay</Text>
            <Text>26/05/25</Text>
          </Group>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            harum sed ducimus optio cupiditate ipsa error soluta velit officiis
            dolor!
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};

export default CommentCard;
