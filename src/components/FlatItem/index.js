import React from "react";
import {
    Container,
    AreaButton,
    AreaCircle,
    Locations,
    NumberIndice,
    AreaIcon,
    Status

} from './styles'

import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

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

            <AreaButton>
                <AreaCircle>
                    <Locations>
                        {data.location.name}
                    </Locations>

                    <Locations>
                        {data.location.region}, {data.location.country}
                    </Locations>

                    <NumberIndice>{data.current.air_quality.o3.toFixed(0)}</NumberIndice>
                </AreaCircle>

                <AreaIcon>
                    <Feather name="wind" size={50} color="black"></Feather>
                </AreaIcon>
            </AreaButton>

            <Status>
                {comparar()}
            </Status>
        </Container>
    );
}


export default FlatItem;