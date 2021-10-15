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