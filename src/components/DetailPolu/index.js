import React from 'react';
import {
    Container,
    Title,
    Header,
    Viewprincipal,
    Divisor,
    Circle,
    NumberIndice,
    NamePoluent,
    Status,
    AllPoluents,
    CircleList,
    Poluents,
    DivisorPoluent,
    ButtonInfo
} from './styles'

import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'

function DetailPolu({ data, number }) {

    let poluentNames = ['CO', 'NO2', 'O3', 'PM 10', 'PM 25', 'SO2']

    const statusText = () => {
        switch (number) {
            case 1: return (
                <Text style={{
                    color: 'white',
                    fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Bom</Text>
            );
            case 2: return (
                <Text style={{
                    color: 'white',
                    fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Moderada</Text>
            );
            case 3: return (
                <Text style={{
                    color: 'white',
                    fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Ruim</Text>
            );
            case 4: return (
                <Text style={{
                    color: 'white',
                    fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Muito Ruim</Text>
            );
            case 5: return (
                <Text style={{
                    color: 'white',
                    fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Péssima</Text>
            );
            case 6: return (
                <Text style={{
                    color: 'white',
                    fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Critica</Text>
            );

            default: return (
                'Nout Found -);'
            );
        }
    }

    let Ozonio = data.current.air_quality.o3
    let pm10 = data.current.air_quality.pm10

    function namePoluent() {
        if (Ozonio > pm10) {
            return poluentNames[2]
        } else {
            return poluentNames[3]
        }
    }

    function numberPoluent() {
        if (Ozonio > pm10) {
            return Ozonio.toFixed(0)
        } else {
            return pm10.toFixed(0)
        }
    }

    return (
        <Container>
            <Header>
                <Title>Poluente Principal</Title>
            </Header>
            <Viewprincipal>

                <Circle props={number}>
                    <NamePoluent>{namePoluent()}</NamePoluent>
                    <NumberIndice>{numberPoluent()}</NumberIndice>
                </Circle>

                <Status props={number}>
                    {statusText()}
                </Status>
            </Viewprincipal>
            <Divisor></Divisor>

            <Title style={{ marginTop: 15 }}>Todos os poluentes</Title>
            <ScrollView>
                <AllPoluents>

                    <Poluents>
                        <CircleList props={number}>
                            <NamePoluent>{namePoluent()}</NamePoluent>
                            <NumberIndice>{numberPoluent()}</NumberIndice>
                        </CircleList>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <CircleList props={number}>
                            <NamePoluent>{poluentNames[0]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.co.toFixed(0)}</NumberIndice>
                        </CircleList>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <CircleList props={number}>
                            <NamePoluent>{poluentNames[1]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.no2.toFixed(0)}</NumberIndice>
                        </CircleList>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <CircleList props={number}>
                            <NamePoluent>{poluentNames[3]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.pm10.toFixed(0)}</NumberIndice>
                        </CircleList>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <CircleList props={number}>
                            <NamePoluent>{poluentNames[4]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.pm2_5.toFixed(0)}</NumberIndice>
                        </CircleList>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <CircleList props={number}>
                            <NamePoluent>{poluentNames[5]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.so2.toFixed(0)}</NumberIndice>
                        </CircleList>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>
                </AllPoluents>
            </ScrollView>
        </Container>
    );
}

export default DetailPolu;