import styled from "styled-components/native";

export const Container = styled.View`
    height: 600px;
    background-color: #121214;
    padding: 14px;
   

`
export const Header = styled.View`
    height: 50px;
    justify-content: center;
    
`;

export const Title = styled.Text`
    font-size:  20px;
    color: #fff;
    font-weight: bold;
`;

export const Viewprincipal = styled.View`
    width: 100%;
    height: 100px;
    
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    
`;

export const Divisor = styled.View`
    width: 100%;
    height: 0.2%;
    background-color: #202024;
`;

export const NumberIndice = styled.Text`
    color: #fff;
    font-size: 18px;
    
`;

export const Circle = styled.View(({ props }) => (
    `background-color: #191919;
     height: 75px;
    width: 20%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: ${props === 1 ? '2px solid #16db65' : '1px solid #fff' &&
        props === 2 ? '2px solid #ffd60a' : '1px solid #fff' &&
            props === 3 ? '2px solid #c1121f' : '1px solid #fff' &&
                props === 4 ? '2px solid #d00000' : '1px solid #fff' &&
                    props === 5 ? '2px solid #440381' : '1px solid #fff' &&
                        props === 6 ? '2px solid #495057' : '1px solid #fff'};

  `
))

export const Status = styled.View(({ props }) => (
    `border: ${props === 1 ? '#16db65' : '#fff' &&
        props === 2 ? '#ffd60a' : '#fff' &&
            props === 3 ? '#c1121f' : '#fff' &&
                props === 4 ? '#d00000' : '#fff' &&
                    props === 5 ? '#440381' : '#fff' &&
                        props === 6 ? '#495057' : '#fff'};
    border-radius: 10px;
    width: 40%;
    height: 40px;
    align-items: center;
    justify-content: center;
  `
))

export const NamePoluent = styled.Text`
    color: #fff;
    font-size: 15px;

`;

export const AllPoluents = styled.View`
    width: 100%;
    justify-content: center;
`;


export const Poluents = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 30px 0;
`

export const CircleList = styled.View`
    background-color: #191919;
    height: 75px;
    width: 20%;
    border-radius: 300px;
    border: 1px solid gray;
    align-items: center;
    justify-content: space-around;
`;

export const DivisorPoluent = styled.View`
    width: 10%;
    height: 2%;
    background-color: #202024;
`;

export const ButtonInfo = styled.TouchableOpacity``;