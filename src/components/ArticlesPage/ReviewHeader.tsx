import {
  BackgroundImage,
  Box,
  Title,
  Stack,
  Group,
  Text,
  Center,
} from "@mantine/core";

interface Props {
  title: string;
  imageURL: string;
  description: string;
}

const ReviewHeader = ({ title, imageURL, description }: Props) => {
  return (
    <Box mx={-10} mt={-20}>
      <BackgroundImage src={imageURL} h={600}>
        <div className="review-header-image-gradient" />
      </BackgroundImage>
      <Center>
        <Stack
          p={10}
          gap={0}
          bg="white"
          mt={-70}
          h="100%"
          w="85%"
          align="center"
          style={{ borderRadius: "16px" }}
        >
          <Title>{title}</Title>
          <Group className="medium-opacity" mt={10}>
            <Text>Netanel Mordakhay</Text>
            <Text>•</Text>
            <Text>Published: 06/02/2025</Text>
            <Text>•</Text>
            <Text>Release Date: 16/05/2025</Text>
            <Text>•</Text>
            <Text>PC, PS4, PS5, Xbox One, Xbox Series</Text>
          </Group>
        </Stack>
      </Center>
      <Center>
        <Title size="xl" my={10}>
          {description}
        </Title>
      </Center>
    </Box>
  );
};

export default ReviewHeader;
