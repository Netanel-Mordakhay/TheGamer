import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "../src/styles/index.css";

const theme = createTheme({
  primaryColor: "gray",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorSchemeScript forceColorScheme="light" />
    <MantineProvider theme={theme} forceColorScheme="light">
      <App />
    </MantineProvider>
  </StrictMode>
);
