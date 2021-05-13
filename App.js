import React from "react";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
// Themes
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
// Context
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase";

import { firebaseConfig } from "./firebaseConfig";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationProvider>
          <Navigation />
        </AuthenticationProvider>
      </ThemeProvider>
    </>
  );
}
