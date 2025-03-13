import React from "react";
import { 
  Container, 
  TextType,
  Type,
  IconView,
  TextValue
} from "./styles";
import { TouchableWithoutFeedback, Alert } from "react-native";

import Icon from "@react-native-vector-icons/feather";


export default function ListRecord({ data, deleteItem }) {

  function handleDeleteItem() {
    Alert.alert(
      'Atenção',
      'Você deseja realmente excluir esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Confirmar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
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
    </TouchableWithoutFeedback>
  );
}