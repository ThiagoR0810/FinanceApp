import styled from "styled-components";

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #F0F4FF;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 90%;
  background-color: #FFF;
  font-size: 17px;
  padding: 0 8px;
  margin-bottom: 14px;
  border-radius: 4px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  align-items: center;
  justify-content: center;
  background-color: #00B94A;
  border-radius: 4px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 21px;
  font-weight: bold;
`;