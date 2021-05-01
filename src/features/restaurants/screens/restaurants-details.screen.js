import React from "react";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantInfoAccordion } from "../components/restaurant-accordion.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <RestaurantInfoAccordion />
    </SafeArea>
  );
};
