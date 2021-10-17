import React from "react";
import {
    Container,
    ItensContainer,
    BackGLeft,
    Itens,
    TitleLocation,
    NumberAr,
    TitleQuality,

} from './styles'

import { View, Text } from 'react-native'

function FlatItem({ data }) {

    let numberIndex = data.current.air_quality['us-epa-index']
    //console.log(numberIndex)

    const comparar = () => {
        switch (numberIndex) {
            case 1:
                return (
                    <View
                        style={{
                            width: '100%',
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: '#16db65',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}>Bom</Text>
                    </View>
                );
            case 2:
                return (
                    <View
                        style={{
                            width: '100%',
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: '#ffd60a',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}>Moderada</Text>
                    </View>
                );
            case 3:
                return (
                    <View
                        style={{
                            width: '100%',
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: '#c1121f',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}>Ruim</Text>
                    </View>
                );
            case 4:
                return (
                    <View
                        style={{
                            width: '100%',
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: '#d00000',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}>Muito Ruim</Text>
                    </View>
                );
            case 5:
                return (

                    <View
                        style={{
                            width: '100%',
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: '#440381',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}>Péssima</Text>
                    </View>
                );
            case 6:
                return (
                    <View
                        style={{
                            width: '100%',
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: '#495057',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text
                            style={{
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                            }}>Critica</Text>
                    </View>
                );

            default:
                return (
                    'Nout Found -);'
                );
        }
    }
    //console.log(comparar())


    return (
        <Container>
            <TitleQuality>Qualidade do ar</TitleQuality>

            <ItensContainer>
                <BackGLeft></BackGLeft>

                <Itens>
                    <TitleLocation>{data.location.name}</TitleLocation>
                    <TitleLocation>{data.location.region}, {data.location.country}</TitleLocation>

                    <NumberAr>{
                        data.current.air_quality.o3 > data.current.air_quality.pm10
                            ?
                            `${data.current.air_quality.o3.toFixed(0)}`
                            :
                            `${data.current.air_quality.pm10.toFixed(0)}`
                    }</NumberAr>

                </Itens>
            </ItensContainer>

            {comparar()}

        </Container>
    );
}
export default FlatItem;