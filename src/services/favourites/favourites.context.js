import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useContext } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter((res) => {
      return res.placeId !== restaurant.placeId;
    });
    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("Error storing:", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("Error loading:", e);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
