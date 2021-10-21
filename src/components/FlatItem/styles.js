import styled from 'styled-components/native'

export const Container = styled.View`
    padding: 14px;  
    align-items: center; 
    margin-top: 20px;
`;

export const AreaButton = styled.TouchableOpacity`
    height: 350px;
    width: 100%;
    align-items: center;
    justify-content: center;

`;

export const AreaCircle = styled.View`
    background-color: #191919;
    height: 300px;
    width: 80%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #16db65;
    z-index: 9;
`;

export const Locations = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const NumberIndice = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;

export const AreaIcon = styled.View`
    margin-top: -30px;
    height: 50px;
    width: 50px;
    background-color: #fff;
    border-radius: 25px;
    z-index: 9;

`;

export const Status = styled.View`
    margin-top: 50px;
    width: 100%;

`;