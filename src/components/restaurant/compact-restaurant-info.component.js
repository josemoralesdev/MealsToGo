import React from "react";
import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  height: 80px;
  width: 100px;
`;
const CompactImage = styled.Image`
  border-radius: 10px;
  height: 80px;
  width: 100px;
`;
const Item = styled.View`
  padding: 8px;
  max-width: 100px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView : CompactImage;
  return (
    <>
      <Item>
        <Image source={{ uri: restaurant.photos[0] }} />
        <Text center variant="caption">
          {restaurant.name}
        </Text>
      </Item>
    </>
  );
};
