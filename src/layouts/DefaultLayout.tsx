import { ReactNode } from "react";
import { AppShell, Burger, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: "lg",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Navbar>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main>
        <Stack>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
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
