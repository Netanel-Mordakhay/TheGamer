import {
  IconHome,
  IconVideo,
  IconNews,
  IconUsers,
  IconShoppingCart,
  IconStar,
} from "@tabler/icons-react";
import { Group, Image, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";
import classes from "../../styles/NavBar.module.css";
import logo from "../../assets/logo.png";
import SearchField from "./SearchField";

interface Props {
  onLinkClick?: () => void;
}

const data = [
  { link: "/", label: "Homepage", icon: IconHome },
  { link: "/forums", label: "Forums", icon: IconUsers },
  { link: "/articles", label: "News", icon: IconNews },
  { link: "/reviews", label: "Reviews", icon: IconStar },
  { link: "/videos", label: "Video", icon: IconVideo },
  { link: "/shop", label: "Shop", icon: IconShoppingCart },
];

const NavBar = ({ onLinkClick }: Props) => {
  const location = useLocation();

  const links = data.map((item) => (
    <Link
      to={item.link}
      className={classes.link}
      data-active={location.pathname === item.link || undefined}
      key={item.label}
      onClick={onLinkClick}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="center">
          <Link to="/">
            <Image src={logo} w={240} />
          </Link>
        </Group>
        <SearchField />
        {links}
      </div>

      <div className={classes.footer}>
        <Text size="sm" c="gray" ta="center">
          TheGamer 2025
        </Text>
      </div>
    </nav>
  );
};

export default NavBar;
