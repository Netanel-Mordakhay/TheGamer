import { Box, Group, Stack, Text } from "@mantine/core";
import { IconSquareArrowRight } from "@tabler/icons-react";

interface Props {
  title: string;
}

const SectionHeader = ({ title }: Props) => {
  return (
    <Stack p={0} gap={0}>
      <div className="section-header-divider" />
      <Group gap={0} className="section-header-container">
        <div className="section-header-divider-icon">
          <IconSquareArrowRight size={18} />
        </div>
        <div className="section-header-divider-title">
          <Text size="lg" fw={500}>
            {title}
          </Text>
        </div>
      </Group>
    </Stack>
  );
};

export default SectionHeader;

/*
<Text
        size="md"
        fw={600}
        c="white"
        bg="orange"
        style={{
          width: "fit-content",
        }}
      >
        */
