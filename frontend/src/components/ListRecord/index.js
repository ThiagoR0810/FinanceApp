import React from "react";
import { 
  Container, 
  TextType,
  Type,
  IconView,
  TextValue
} from "./styles";

import Icon from "@react-native-vector-icons/feather";

export default function ListRecord({ data }) {
  return (
    <Container>
      <Type>
        <IconView type={data.type} >
          <Icon 
            name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
            size={20} 
            color="#FFF" 
          />
          <TextType>{data.type}</TextType>
        </IconView>
      </Type>

      <TextValue>
        R$ {data.value}
      </TextValue>
    </Container>
  );
}