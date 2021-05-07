import React, { useEffect, useState, createContext, useMemo } from "react";
import { useContext } from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsTransform,
  restaurantsRequest,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 1000);
  };

  useEffect(() => {
    if (location) {
      const { lat, lng } = location;
      const locationString = `${lat},${lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, error, isLoading }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
