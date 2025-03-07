import { Center, Grid } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const OneColumn = ({ children }: Props) => {
  return (
    <Center>
      <Grid
        grow
        justify="center"
        align="flex-start"
        w={1200}
        px={10}
        py={20}
        my={-16}
        className="layouts-default-container"
      >
        <Grid.Col span={12}>{children}</Grid.Col>
      </Grid>
    </Center>
  );
};

export default OneColumn;
