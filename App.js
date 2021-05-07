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
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAZSTQS4QTeLsg4sRABsv9qHkhhSeUje90",
    authDomain: "mealstogo-4a3d5.firebaseapp.com",
    projectId: "mealstogo-4a3d5",
    storageBucket: "mealstogo-4a3d5.appspot.com",
    messagingSenderId: "577460851070",
    appId: "1:577460851070:web:b4a61aa335a9c0c980232f",
  };

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
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationProvider>
      </ThemeProvider>
    </>
  );
}
