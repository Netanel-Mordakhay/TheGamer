import { Box, Button, Space } from "@mantine/core";
import { ReactNode } from "react";
import SectionHeader from "./SectionHeader";

interface Props {
  title: string;
  buttonText: string;
  children: ReactNode;
  dark: boolean;
}

const SidebarDarkBox = ({ title, buttonText, children, dark }: Props) => {
  return (
    /* Sets box's padding & bg color based on input */
    <Box p={dark ? 10 : 0} bg={dark ? "dark" : "white"}>
      <SectionHeader title={title} />
      <Space h="md" />
      {children}
      <Button mt={10} radius="xs" fullWidth>
        {buttonText}
      </Button>
    </Box>
  );
};

export default SidebarDarkBox;
