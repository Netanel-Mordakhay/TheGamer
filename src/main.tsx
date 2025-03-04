import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import "./index.css";

const theme = createTheme({
  primaryColor: "orange",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorSchemeScript forceColorScheme="dark" />
    <MantineProvider theme={theme} forceColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
);
