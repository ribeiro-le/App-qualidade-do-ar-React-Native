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

export const Status = styled.TouchableOpacity(({ props }) => (
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

export const Pozonio = styled.View(({ props }) => (
    `
    background-color: #191919;
    height: 75px;
    width: 20%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: ${props.current.air_quality.o3 >= 0 && props.current.air_quality.o3 < 100 ? '2px solid #16db65' : '1px solid #fff' &&
        props.current.air_quality.o3 > 101 && props.current.air_quality.o3 < 140 ? '2px solid #ffd60a' : '1px solid #fff' &&
            props.current.air_quality.o3 > 141 && props.current.air_quality.o3 < 199 ? '2px solid #c1121f' : '1px solid #fff' &&
                props.current.air_quality.o3 > 200 && props.current.air_quality.o3 < 399 ? '2px solid #d00000' : '1px solid #fff' &&
                    props.current.air_quality.o3 > 400 && props.current.air_quality.o3 < 599 ? '2px solid #440381' : '1px solid #fff' &&
                        props.current.air_quality.o3 >= 600 ? '2px solid #495057' : '1px solid #fff'}
`
));
export const Pmvinte = styled.View(({ props }) => (
    `
    background-color: #191919;
    height: 75px;
    width: 20%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: ${props.current.air_quality.pm2_5 >= 0 && props.current.air_quality.pm2_5 < 25 ? '2px solid #16db65' : '1px solid #fff' &&
        props.current.air_quality.pm2_5 > 26 && props.current.air_quality.pm2_5 < 60 ? '2px solid #ffd60a' : '1px solid #fff' &&
            props.current.air_quality.pm2_5 > 61 && props.current.air_quality.pm2_5 < 124 ? '2px solid #c1121f' : '1px solid #fff' &&
                props.current.air_quality.pm2_5 > 125 && props.current.air_quality.pm2_5 < 209 ? '2px solid #d00000' : '1px solid #fff' &&
                    props.current.air_quality.pm2_5 > 210 && props.current.air_quality.pm2_5 < 249 ? '2px solid #440381' : '1px solid #fff' &&
                        props.current.air_quality.pm2_5 >= 250 ? '2px solid #495057' : '1px solid #fff'}
`
));
export const Pmdez = styled.View(({ props }) => (
    `
    background-color: #191919;
    height: 75px;
    width: 20%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: ${props.current.air_quality.pm10 >= 0 && props.current.air_quality.pm10 < 50 ? '2px solid #16db65' : '1px solid #fff' &&
        props.current.air_quality.pm10 > 51 && props.current.air_quality.pm10 < 120 ? '2px solid #ffd60a' : '1px solid #fff' &&
            props.current.air_quality.pm10 > 121 && props.current.air_quality.pm10 < 249 ? '2px solid #c1121f' : '1px solid #fff' &&
                props.current.air_quality.pm10 > 250 && props.current.air_quality.pm10 < 419 ? '2px solid #d00000' : '1px solid #fff' &&
                    props.current.air_quality.pm10 > 420 && props.current.air_quality.pm10 < 499 ? '2px solid #440381' : '1px solid #fff' &&
                        props.current.air_quality.pm10 >= 500 ? '2px solid #495057' : '1px solid #fff'}
`
));
export const Pnodois = styled.View(({ props }) => (
    `
    background-color: #191919;
    height: 75px;
    width: 20%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: ${props.current.air_quality.no2 >= 0 && props.current.air_quality.no2 < 200 ? '2px solid #16db65' : '1px solid #fff' &&
        props.current.air_quality.no2 > 201 && props.current.air_quality.no2 < 260 ? '2px solid #ffd60a' : '1px solid #fff' &&
            props.current.air_quality.no2 > 261 && props.current.air_quality.no2 < 1129 ? '2px solid #c1121f' : '1px solid #fff' &&
                props.current.air_quality.no2 > 1130 && props.current.air_quality.no2 < 2259 ? '2px solid #d00000' : '1px solid #fff' &&
                    props.current.air_quality.no2 > 2260 && props.current.air_quality.no2 < 2999 ? '2px solid #440381' : '1px solid #fff' &&
                        props.current.air_quality.no2 >= 3000 ? '2px solid #495057' : '1px solid #fff'}
`
));
export const Psdois = styled.View(({ props }) => (
    `
    background-color: #191919;
    height: 75px;
    width: 20%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: ${props.current.air_quality.so2 >= 0 && props.current.air_quality.so2 < 20 ? '2px solid #16db65' : '1px solid #fff' &&
        props.current.air_quality.so2 > 21 && props.current.air_quality.so2 < 125 ? '2px solid #ffd60a' : '1px solid #fff' &&
            props.current.air_quality.so2 > 126 && props.current.air_quality.so2 < 799 ? '2px solid #c1121f' : '1px solid #fff' &&
                props.current.air_quality.s02 > 800 && props.current.air_quality.s02 < 1599 ? '2px solid #d00000' : '1px solid #fff' &&
                    props.current.air_quality.so2 > 1600 && props.current.air_quality.so2 < 2099 ? '2px solid #440381' : '1px solid #fff' &&
                        props.current.air_quality.so2 >= 2100 ? '2px solid #495057' : '1px solid #fff'}
`
));
export const Pco = styled.View(({ props }) => (
    `
    background-color: #191919;
    height: 75px;
    width: 20%;
    border-radius: 300px;
    align-items: center;
    justify-content: space-around;
    border: ${props.current.air_quality.co >= 0 && props.current.air_quality.co < 10 ? '2px solid #16db65' : '1px solid #fff' &&
        props.current.air_quality.co > 11 && props.current.air_quality.co < 15 ? '2px solid #ffd60a' : '1px solid #fff' &&
            props.current.air_quality.co > 16 && props.current.air_quality.co < 30 ? '2px solid #c1121f' : '1px solid #fff' &&
                props.current.air_quality.co > 31 && props.current.air_quality.co < 40 ? '2px solid #d00000' : '1px solid #fff' &&
                    props.current.air_quality.co > 41 && props.current.air_quality.co < 60 ? '2px solid #440381' : '1px solid #fff' &&
                        props.current.air_quality.co >= 61 ? '2px solid #495057' : '1px solid #fff'}
`
));

export const DivisorPoluent = styled.View`
    width: 10%;
    height: 2%;
    background-color: #202024;
`;

export const ButtonInfo = styled.TouchableOpacity``;