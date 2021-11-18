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
    Pozonio,
    Pmvinte,
    Pmdez,
    Pnodois,
    Psdois,
    Pco,
    Poluents,
    DivisorPoluent,
    ButtonInfo
} from './styles'

import { Text, Alert } from 'react-native';
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


    function verifyPoluent() {
        if (Ozonio > pm10) {
            return (
                <Pozonio props={data}>
                    <NamePoluent>{poluentNames[2]}</NamePoluent>
                    <NumberIndice>{data.current.air_quality.o3.toFixed(0)}</NumberIndice>
                </Pozonio>
            )
        }
        else {
            return (
                <Pmdez props={data}>
                    <NamePoluent>{poluentNames[3]}</NamePoluent>
                    <NumberIndice>{data.current.air_quality.pm10.toFixed(0)}</NumberIndice>
                </Pmdez>
            )
        }
    }

    return (
        <Container>
            <Header>
                <Title>Poluente Principal</Title>
            </Header>
            <Viewprincipal>


                {verifyPoluent()}

                <Status props={number} onPress={() => {
                    switch (number) {
                        case 1: return (
                            Alert.alert(`  Bom`,
                                `A qualidade do ar é considerada satisfatória e a poluição do arrepresenta pouco ou nenhum risco.`)
                        );
                        case 2: return (
                            Alert.alert(` Moderada`,
                                `A qualidade do ar é aceitável, no entanto, pode haver grupos sensíveis para alguns poluentes.`)
                        );
                        case 3: return (
                            Alert.alert(` Ruim`,
                                `Grupos sensíveis podem apresentar efeitos na saúde. O público em geral não é afetado.`)
                        );
                        case 4: return (
                            Alert.alert(` Muito Ruim`,
                                `Toda a população pode começar a apresentar efeitos na saúde. Grupos sensíveis podem apresentar efeitos ainda mais graves à saúde.`)
                        );

                        case 5: return (
                            Alert.alert(` Pessima`,
                                `Advertência de situação de emergência. Toda a populaçãoé suscetível de ser afetada.`)
                        );

                        case 6: return (
                            Alert.alert(` Critíca`,
                                `Alerta sanitário: todos podem apresentar efeitos à saúde mais graves.`)
                        );

                        default: return (
                            'Nout Found -);'
                        );

                    }
                }}>
                    {statusText()}
                </Status>
            </Viewprincipal>
            <Divisor></Divisor>

            <Title style={{ marginTop: 15 }}>Todos os poluentes</Title>
            <ScrollView>
                <AllPoluents>

                    <Poluents>
                        <Pozonio props={data}>
                            <NamePoluent>{poluentNames[2]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.o3.toFixed(0)}</NumberIndice>
                        </Pozonio>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo
                            onPress={() => {
                                Alert.alert(`Ozônio(O3)`,
                                    `Além de prejuízos à saúde, o ozônio pode causar danos à vegetação. É sempre bom ressaltar que o ozônio encontrado na faixa de ar próxima do solo, onde respiramos, chamado de “mau ozônio”, é tóxico. Entretanto, na estratosfera (cerca de 25 km de altitude) o ozônio tem a importante função de proteger a Terra, como um filtro, dos raios ultravioletas emitidos pelo Sol.`)
                            }}
                        >
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <Pco props={data}>
                            <NamePoluent>{poluentNames[0]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.co.toFixed(0)}</NumberIndice>
                        </Pco>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo onPress={() => {
                            Alert.alert(`Monóxido de Carbono (CO)`,
                                `É um gás incolor e inodoro que resulta da queima incompleta de combustíveis de origem orgânica (combustíveis fósseis, biomassa etc.). Em geral é encontrado em maiores concentrações nas cidades, emitido principalmente por veículos automotores. Altas concentrações de CO são encontradas em áreas de intensa circulação de veículos.`)
                        }}>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <Pnodois props={data}>
                            <NamePoluent>{poluentNames[1]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.no2.toFixed(0)}</NumberIndice>
                        </Pnodois>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo onPress={() => {
                            Alert.alert(`Dióxido de nitrogênio(NO2)`,
                                `É um gás muito comum, tóxico, conhecido por seu cheiro forte e coloração castanha em algumas situações. O nitrogênio gasoso (N2) e o oxigênio molecular (O2) reagem formando o monóxido de nitrogênio (NO), proveniente da queima de combustível no motor de carros ou em fornos industriais onde a temperatura é muito elevada. O NO oxidado na atmosfera pelo O2 forma o dióxido de nitrogênio (NO2) e também pode reagir formando ozônio.`)
                        }}>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <Pmdez props={data}>
                            <NamePoluent>{poluentNames[3]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.pm10.toFixed(0)}</NumberIndice>
                        </Pmdez>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo onPress={() => {
                            Alert.alert(`Partículas Inaláveis (MP10)`,
                                `Podem ser definidas de maneira simplificada como aquelas cujo diâmetro aerodinâmico é menor ou igual a 10 µm. Dependendo da distribuição de tamanho na faixa de 0 a 10 µm, podem ficar retidas na parte superior do sistema respiratório ou penetrar mais profundamente, alcançando os alvéolos pulmonares.`)
                        }}>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <Pmvinte props={data} >
                            <NamePoluent>{poluentNames[4]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.pm2_5.toFixed(0)}</NumberIndice>
                        </Pmvinte>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo onPress={() => {
                            Alert.alert(`Partículas Inaláveis Finas (MP2,5)`,
                                `Podem ser definidas de maneira simplificada como aquelas cujo diâmetro aerodinâmico é menor ou igual a 2,5 µm. or causa do seu tamanho diminuto, penetram profundamente no sistema respiratório, podendo atingir os alvéolos pulmonares.`)
                        }}>
                            <Ionicons name="information-circle-outline"
                                size={45} color="#48cae4"></Ionicons>
                        </ButtonInfo>
                    </Poluents>

                    <Poluents>
                        <Psdois props={data}>
                            <NamePoluent>{poluentNames[5]}</NamePoluent>
                            <NumberIndice>{data.current.air_quality.so2.toFixed(0)}</NumberIndice>
                        </Psdois>

                        <DivisorPoluent></DivisorPoluent>

                        <ButtonInfo onPress={() => {
                            Alert.alert(`Dióxido de Enxofre (SO2)`,
                                `Resulta principalmente da queima de combustíveis que contém enxofre, como óleo diesel, óleo combustível industrial e gasolina. É um dos principais formadores da chuva ácida. O dióxido de enxofre pode reagir com outras substâncias presentes no ar formando partículas de sulfato que são responsáveis pela redução da visibilidade na atmosfera.`)
                        }}>
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