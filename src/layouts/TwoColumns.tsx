import { Container, Grid } from "@mantine/core";
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
    <Container size="xl" px={20} py={10}>
      <Grid grow justify="center" align="flex-start">
        <Grid.Col span={8} mih={100}>
          {child1}
        </Grid.Col>
        <Grid.Col span={4} mih={100}>
          {child2}
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default TwoColumns;
