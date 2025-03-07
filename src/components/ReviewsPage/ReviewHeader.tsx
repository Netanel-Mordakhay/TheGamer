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
          mt={-80}
          h="100%"
          w="80%"
          align="center"
        >
          <Title>{title}</Title>
          <Group className="medium-opacity">
            <Text>Netanel Mordakhay</Text>
            <Text>Feb 6th, 2025</Text>
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
