import { Card, Stack, Input, Textarea, Button } from "@mantine/core";

const CommentForm = () => {
  return (
    <Card className="comment-card" radius="sm">
      <Stack gap={15}>
        <Input placeholder="Name" />
        <Textarea
          resize="vertical"
          placeholder="Your comment"
          autosize
          minRows={4}
          maxRows={8}
        />
        <Button radius="xs">Submit comment</Button>
      </Stack>
    </Card>
  );
};

export default CommentForm;
