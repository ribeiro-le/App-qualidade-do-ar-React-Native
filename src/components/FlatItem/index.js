import React from "react";
import {
    Container,
    ItensContainer,
    BackGLeft,
    Itens,
    TitleLocation,
    NumberAr,

} from './styles'


function FlatItem({ data }) {

    let numberIndex = data.current.air_quality['gb-defra-index']
    //console.log(numberIndex)

    const comparar = () => {
        switch (numberIndex) {
            case 1:
                return (
                    'Boa'
                );
            case 2:
                return (
                    'Moderada'
                );
            case 3:
                return (
                    'Ruim'
                );
            case 4:
                return (
                    'Pessima'
                );
            case 5:
                return (
                    'Muito Insalubre'
                );
            case 6:
                return (
                    'Perigoso'
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
        </Container>
    );
}
export default FlatItem;