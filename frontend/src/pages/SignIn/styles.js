import styled from "styled-components/native";

export const Background = styled.View`
	flex: 1;
	background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.Image`
	margin-bottom: 25px;
`;

export const AreaInput = styled.View`
	flex-direction: row;
`;

export const Input = styled.TextInput`
	background-color: #FFF;
	width: 90%;
	font-size: 17px;
	padding: 10px;
	border-readius: 8px;
	color: #121212;
	margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
	background-color: #3B3DBF;
	width: 90%;
	height: 45px;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	margint-top: 10px;
`;

export const SubmitText = styled.Text`
	font-size: 20px;
	color: #FFF;
`;

export const Link = styled.TouchableOpacity`
	margin-top: 10px;
	margin-bottom: 10px;
`;

export const LinkText = styled.Text`
	color: #171717;
`;