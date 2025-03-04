import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import { Card, Center, Group, Text, useMantineTheme } from "@mantine/core";
import classes from "../../styles/TopArticleCard.module.css";

const TopArticleCard = () => {
  const theme = useMantineTheme();

  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component="a"
      href="https://mantine.dev/"
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage:
            "url(https://rukminim2.flixcart.com/image/850/1000/j81xsi80/poster/h/w/z/large-battlefield-4-china-rising-game-on-fine-art-paper-on-24x36-original-imaerxz9yzxamudh.jpeg?q=90&crop=false)",
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            All We Currently Know About the next Battlefield
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              Netanel Mordakhay
            </Text>

            <Group gap="lg">
              <Center>
                <IconMessageCircle
                  size={16}
                  stroke={1.5}
                  color={theme.colors.dark[2]}
                />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
};

export default TopArticleCard;
