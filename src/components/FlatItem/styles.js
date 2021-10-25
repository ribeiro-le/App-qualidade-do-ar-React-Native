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

export const AreaCircle = styled.View(({ props }) => (
    `background-color: #191919;
     height: 300px;
    width: 80%;
    border-radius: 300px;
  
    align-items: center;
    justify-content: space-around;
    z-index: 9;
    border: ${props === 1 ? '2px solid #16db65' : '2px solid #fff' &&
        props === 2 ? '2px solid #ffd60a' : '2px solid #fff' &&
            props === 3 ? '2px solid #c1121f' : '2px solid #fff' &&
                props === 4 ? '2px solid #d00000' : '2px solid #fff' &&
                    props === 5 ? '2px solid #440381' : '2px solid #fff' &&
                        props === 6 ? '2px solid #495057' : '2px solid #fff'};

  `

))



export const Locations = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    text-align: center;
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
    background-color: #121214;
    border-radius: 25px;
    z-index: 9;

`;

export const Status = styled.View`
    margin-top: 50px;
    width: 100%;
`;