import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";
import {
  AccountCover,
  AccountBackground,
  AccountContainer,
  AuthButton,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Type in your email"
          style={{ width: 300 }}
          theme={{ colors: { primary: colors.brand.primary } }}
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer size="large">
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry={true}
            theme={{ colors: { primary: colors.brand.primary } }}
            placeholder="Type in your password"
            style={{ width: 300 }}
            value={password}
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
