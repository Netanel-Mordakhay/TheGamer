import {
  Avatar,
  Card,
  Divider,
  Group,
  Paper,
  Space,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import classes from "../../styles/LatestComments.module.css";
import SectionHeader from "../Globals/SectionHeader";

const LatestComments = () => {
  return (
    <Paper withBorder radius="sm" p="lg">
      <SectionHeader title="Latest Reviews" />
      <Space h="md" />
      {/* This duplication is currently very stupid, but I just want to see how it'll look */}
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text fz="sm">Jacob Warnhalter</Text>
          <Text fz="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
          }}
        />
      </TypographyStylesProvider>
      <Divider my={10} />
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text fz="sm">Jacob Warnhalter</Text>
          <Text fz="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
          }}
        />
      </TypographyStylesProvider>
      <Divider my={10} />
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          alt="Jacob Warnhalter"
          radius="xl"
        />
        <div>
          <Text fz="sm">Jacob Warnhalter</Text>
          <Text fz="xs" c="dimmed">
            10 minutes ago
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div
          className={classes.content}
          dangerouslySetInnerHTML={{
            __html:
              '<p>I use <a href="https://heroku.com/" rel="noopener noreferrer" target="_blank">Heroku</a> to host my Node.js application, but MongoDB add-on appears to be too <strong>expensive</strong>. I consider switching to <a href="https://www.digitalocean.com/" rel="noopener noreferrer" target="_blank">Digital Ocean</a> VPS to save some cash.</p>',
          }}
        />
      </TypographyStylesProvider>
    </Paper>
  );
};

export default LatestComments;
