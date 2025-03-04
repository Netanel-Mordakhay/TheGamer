import {
  Box,
  Image,
  Divider,
  Group,
  List,
  SimpleGrid,
  Text,
} from "@mantine/core";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <Box bg="black" c="dimmed" mx={{ base: -15, md: -16 }} mb={-16}>
      <Divider
        my="xs"
        mx={10}
        label="Copyright © 2025 TheGamer. All Rights Reserved."
        labelPosition="left"
        color="orange"
      />
      <Group px={20} pb={20} justify="space-between" align="flex-end">
        <SimpleGrid cols={3} spacing="xl">
          <List listStyleType="none">
            <List.Item>Homepage</List.Item>
            <List.Item>Forums</List.Item>
            <List.Item>News</List.Item>
            <List.Item>Reviews</List.Item>
            <List.Item>Videos</List.Item>
            <List.Item>Shop</List.Item>
          </List>
          <List listStyleType="none">
            <List.Item>Homepage</List.Item>
            <List.Item>Forums</List.Item>
            <List.Item>News</List.Item>
            <List.Item>Reviews</List.Item>
            <List.Item>Videos</List.Item>
            <List.Item>Shop</List.Item>
            <List.Item>Reviews</List.Item>
            <List.Item>Videos</List.Item>
            <List.Item>Shop</List.Item>
          </List>
          <List listStyleType="none">
            <List.Item>Homepage</List.Item>
            <List.Item>Forums</List.Item>
            <List.Item>News</List.Item>
            <List.Item>Reviews</List.Item>
          </List>
        </SimpleGrid>
        <Image src={logo} w={150} opacity={0.5} />
      </Group>
    </Box>
  );
};

export default Footer;
