import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: #121214;
    padding: 14px;
`;

export const SearchContainer = styled.View` 
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 50%;
    padding: 0 14px;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: #fff;
    font-weight: bold;
   
`;

export const SearchInput = styled.View`
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 14px;
    margin-bottom: 10px;

`;

export const Input = styled.TextInput`
    background-color: #121214;
    width: 85%;
    height: 50px;
    border: 1px solid #00b4d8;
    border-radius: 50px;
    padding: 8px 15px;
    font-size: 17px;
    color: #fff;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    padding-left: 7px;
    align-items: center;
    justify-content: center;

`;

