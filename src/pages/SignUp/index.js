import React, { useContext } from "react";
import { View, Text } from "react-native";

import { 
  Background, 
  Container, 
  AreaInput, 
  SubmitButton, 
  SubmitText, 
  Input
} from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
  const { user } = useContext(AuthContext);

  function handleSignUp() {
    console.log(user);
  }

  return (
    <Background>

      <Container
        behavior={Platform.OS === "ios" ? "padding" : "padding"}
        enabled
      >
        <AreaInput>
          <Input
            placeholder="Nome"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="E-mail"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>

      </Container>

    </Background>
  );
}