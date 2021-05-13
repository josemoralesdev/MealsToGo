import React from "react";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { SvgXml } from "react-native-svg";
import EmptyList from "../../../../assets/undraw_no-data";
import { RestaurantList } from "../../../features/restaurants/components/restaurant-list.styles";

const EmptyFavouritesContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const EmptyFavouritesSVG = styled(SvgXml).attrs({
  xml: EmptyList,
  width: 192,
  height: 192,
})``;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {favourites.length ? (
        <RestaurantList
          data={favourites}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <EmptyFavouritesContainer>
          <EmptyFavouritesSVG />
          <Spacer size="large">
            <Text variant="label">You don't have any favourites yet!</Text>
          </Spacer>
        </EmptyFavouritesContainer>
      )}
    </SafeArea>
  );
};
