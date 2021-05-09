import React, { useContext, useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  AccountCover,
  AccountBackground,
  AccountContainer,
  AuthInput,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals2Go</Title>
      <AccountContainer>
        <AuthInput
          autoCapitalize="none"
          keyboardType="email-address"
          label="Email"
          mode="outlined"
          placeholder="Type in your email"
          textContentType="emailAddress"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <Spacer size="large">
          <AuthInput
            autoCapitalize="none"
            mode="outlined"
            label="Password"
            textContentType="password"
            secureTextEntry
            placeholder="Type in your password"
            value={password}
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
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
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Go back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
