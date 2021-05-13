import React from "react";
import LottieView from "lottie-react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountCover,
  AccountBackground,
  AccountContainer,
  AnimationContainer,
  AuthButton,
  Title,
} from "../components/account.styles";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountScreen = ({ navigation }) => (
  <AccountBackground>
    <AccountCover />
    <AnimationContainer>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="contain"
        source={require("../../../../assets/food-location.json")}
      />
    </AnimationContainer>
    <Spacer size="large">
      <Title>Meals2Go</Title>
    </Spacer>
    <AccountContainer>
      <AuthButton
        icon="lock-open-outline"
        mode="contained"
        color={colors.brand.primary}
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </AuthButton>
      <Spacer size="large">
        <AuthButton
          icon="email"
          color={colors.brand.secondary}
          variant="primary"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </Spacer>
    </AccountContainer>
  </AccountBackground>
);
