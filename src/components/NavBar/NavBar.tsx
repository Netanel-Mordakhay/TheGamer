import { useState } from "react";
import {
  IconHome,
  IconVideo,
  IconNews,
  IconUsers,
  IconShoppingCart,
  IconLogout,
  IconStar,
  IconSwitchHorizontal,
} from "@tabler/icons-react";
import { Group, Image } from "@mantine/core";
import classes from "../../styles/NavBar.module.css";
import logo from "../../assets/logo.png";

const data = [
  { link: "", label: "Homepage", icon: IconHome },
  { link: "", label: "Forums", icon: IconUsers },
  { link: "", label: "News", icon: IconNews },
  { link: "", label: "Reviews", icon: IconStar },
  { link: "", label: "Video", icon: IconVideo },
  { link: "", label: "Shop", icon: IconShoppingCart },
];

const NavBar = () => {
  const [active, setActive] = useState("Homepage");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="center">
          <Image src={logo} w={240} />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
