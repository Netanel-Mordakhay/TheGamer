import {
  BackgroundImage,
  Box,
  Title,
  Stack,
  Group,
  Text,
  Center,
} from "@mantine/core";
import PlatformIcon from "../Globals/PlatformIcon";

interface Props {
  title: string;
  imageURL: string;
  description: string;
}

const ReviewHeader = ({ title, imageURL, description }: Props) => {
  return (
    <Box mx={-10} mt={-20}>
      <BackgroundImage src={imageURL} h={{ base: 400, md: 600 }}>
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
          <Title ta="center">{title}</Title>
          <Group
            className="medium-opacity"
            mt={10}
            px={20}
            justify="center"
            gap={10}
          >
            <Text>Netanel Mordakhay</Text>
            <Text>Review Published: 06/02/2025</Text>
            <Text>Game Release: 16/05/2025</Text>
            {/* <Text>PC, PS4, PS5, Xbox One, Xbox Series</Text> */}
          </Group>
          <Group mt={10} px={20} justify="center">
            <PlatformIcon platform="pc" />
            <PlatformIcon platform="ps4" />
            <PlatformIcon platform="ps5" />
            <PlatformIcon platform="xboxone" />
            <PlatformIcon platform="xboxseries" />
            <PlatformIcon platform="nswitch" />
          </Group>
        </Stack>
      </Center>
      <Center>
        <Title size="xl" m={10}>
          {description}
        </Title>
      </Center>
    </Box>
  );
};

export default ReviewHeader;
