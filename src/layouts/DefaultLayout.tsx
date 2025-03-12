import { ReactNode } from "react";
import { AppShell, Burger, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const [opened, { toggle, close }] = useDisclosure();

  const handleLinkClick = () => {
    close();
  };

  return (
    <AppShell
      header={{ height: { base: 34, lg: 0 } }}
      navbar={{
        width: 300,
        breakpoint: "lg",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group bg="black">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="lg"
            size="md"
            color="white"
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar className="deafult-navbar">
        <NavBar onLinkClick={handleLinkClick} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack>
          {children} <Footer />
        </Stack>
      </AppShell.Main>
    </AppShell>
  );
};

export default DefaultLayout;

/*
<AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>
*/
