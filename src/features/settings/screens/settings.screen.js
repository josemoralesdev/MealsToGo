import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";

const AvatarContainer = styled.View`
  align-items: center;
`;
const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarIcon = styled(Avatar.Icon)`
  align-self: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <AvatarIcon
          icon="human"
          size={128}
          backgroundColor={colors.brand.primary}
        />
        <Spacer size="large" position="top">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon {...props} color="black" icon="heart-outline" />
          )}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
