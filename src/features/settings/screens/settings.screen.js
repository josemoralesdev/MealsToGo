import React, { useContext } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          title="Favourites"
          description="View your favourites"
          style={{ padding: 16 }}
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          title="Logout"
          style={{ padding: 16 }}
          left={(props) => <List.Icon {...props} color="black" icon="logout" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
