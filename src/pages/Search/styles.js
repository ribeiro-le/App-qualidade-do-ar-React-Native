import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    padding: 14px;
    background-color: #121214; 
`;

export const ListCity = styled.FlatList``;

export const AreaView = styled.SafeAreaView`
    width: 100%;
    height: 350px;
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
    
    border: ${props === 1 ? '3px solid #16db65' : '1px solid #fff' &&
        props === 2 ? '3px solid #ffd60a' : '1px solid #fff' &&
            props === 3 ? '3px solid #c1121f' : '1px solid #fff' &&
                props === 4 ? '3px solid #d00000' : '1px solid #fff' &&
                    props === 5 ? '3px solid #440381' : '1px solid #fff' &&
                        props === 6 ? '3px solid #495057' : '1px solid #fff'};

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
    margin-top: -25px;
    height: 50px;
    width: 50px;
    background-color: #121214;
    border-radius: 25px;

`;

export const AreaInfo = styled.View`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;
`;

export const ButtonInfo = styled.TouchableOpacity`
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;

`;

export const Status = styled.View(({ props }) => (
    `background-color: ${props === 1 ? '#16db65' : '#fff' &&
        props === 2 ? '#ffd60a' : '#fff' &&
            props === 3 ? '#c1121f' : '#fff' &&
                props === 4 ? '#d00000' : '#fff' &&
                    props === 5 ? '#440381' : '#fff' &&
                        props === 6 ? '#495057' : '#fff'};
    border-radius: 10px;
    width: 100%;
    height: 60px;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
    
  `
))



export const ViewModal = styled.View`
    height: 600px;
    background-color: #121214;
`;