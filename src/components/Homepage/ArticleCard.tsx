import { Avatar, Card, Group, Image, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks"; // כדי לזהות גודל מסך
import classes from "../../styles/ArticleCard.module.css";

const ArticleCard = () => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // מסכים קטנים

  return (
    <Card withBorder radius="xs" p={0} className={classes.card}>
      {isSmallScreen ? (
        <Stack gap="sm">
          <Image
            src="https://demo.codevibrant.com/child-theme/gaming-mag/wp-content/uploads/sites/11/2018/11/call-of-duty-700x441.jpg"
            mah={200}
          />
          <div className={classes.body}>
            <Text tt="uppercase" c="dimmed" fw={700} size="xs">
              - news
            </Text>
            <Text className={classes.title} mt="xs" mb="md" size="xl" fw={700}>
              Should You Play Skyrim in 2025?
            </Text>
            <Text className={classes.description} mt="xs" mb="md">
              The game that has been with us longer than life itself.
            </Text>
            <Group gap="xs" wrap="nowrap">
              <Text size="xs">Netanel Mordakhay</Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                3 Comments
              </Text>
            </Group>
          </div>
        </Stack>
      ) : (
        <Group wrap="nowrap" gap={15}>
          <Image
            src="https://demo.codevibrant.com/child-theme/gaming-mag/wp-content/uploads/sites/11/2018/11/call-of-duty-700x441.jpg"
            h={170}
          />
          <div className={classes.body}>
            <Text tt="uppercase" c="dimmed" fw={700} size="xs">
              - news
            </Text>
            <Text className={classes.title} mt="xs" mb="md" size="xl" fw={700}>
              Should You Play Skyrim in 2025?
            </Text>
            <Text className={classes.description} mt="xs" mb="md">
              The game that has been with us longer than life itself.
            </Text>
            <Group gap="xs" wrap="nowrap">
              <Text size="xs">Netanel Mordakhay</Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                Feb 6th
              </Text>
              <Text size="xs" c="dimmed">
                •
              </Text>
              <Text size="xs" c="dimmed">
                3 Comments
              </Text>
            </Group>
          </div>
        </Group>
      )}
    </Card>
  );
};

export default ArticleCard;
