import { Image, Stack, Title, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import OneColumn from "../layouts/OneColumn";
import image404 from "../assets/404.jpg";

const NotFoundPage = () => {
  return (
    <OneColumn>
      <Stack h="100svh" justify="center" align="center">
        <Image src={image404} w={300} radius="xl" />
        <Title ta="center">404 - Page Not Found</Title>
        <Text ta="center">
          Dear adventurer, it seems like this page does not exists.
        </Text>
        <Button component={Link} to="/">
          Take me back
        </Button>
      </Stack>
    </OneColumn>
  );
};

export default NotFoundPage;
