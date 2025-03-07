import { Grid, Center } from "@mantine/core";
import React from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const TwoColumns = ({ children }: Props) => {
  const [child1, child2] = React.Children.toArray(children)
    .concat([null, null])
    .slice(0, 2);

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
        <Grid.Col span={8}>{child1}</Grid.Col>
        <Grid.Col span={4}>{child2}</Grid.Col>
      </Grid>
    </Center>
  );
};

export default TwoColumns;
