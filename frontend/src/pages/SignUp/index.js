import React, { useContext, useState } from "react";
import { ActivityIndicator } from "react-native";

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
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (name === "" || email === "" || password === "") {
      console.log("Preencha todos os campos!");
      return;
    }

    signUp(name, email, password);
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
            value={name}
            onChangeText={ (text) => setName(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={ (text) => setEmail(text) }
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>

      </Container>

    </Background>
  );
}