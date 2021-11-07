import React, { useState, useEffect, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';

import { View, ActivityIndicator, ScrollView, Text, Platform } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { Modalize } from 'react-native-modalize'

import DetailPolu from '../../components/DetailPolu'


import {
    Container,
    AreaView,
    AreaCircle,
    Locations,
    NumberIndice,
    AreaIcon,
    AreaInfo,
    ButtonInfo,
    Status,

} from './styles';


function Search() {
    const route = useRoute();
    const [city, setCity] = useState([]);

    const [loading, setLoading] = useState(true);
    const [number, setNumber] = useState([]);

    const [localFavorite, setLocalFavorite] = useState(false)
    const modalizeRef = useRef(null);

    const statusText = () => {
        switch (number) {
            case 1: return (
                <Text style={{
                    color: 'white',
                    fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Bom</Text>
            );
            case 2: return (
                <Text style={{
                    color: 'white',
                    fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Moderada</Text>
            );
            case 3: return (
                <Text style={{
                    color: 'white',
                    fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Ruim</Text>
            );
            case 4: return (
                <Text style={{
                    color: 'white',
                    fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Muito Ruim</Text>
            );
            case 5: return (
                <Text style={{
                    color: 'white',
                    fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Péssima</Text>
            );
            case 6: return (
                <Text style={{
                    color: 'white',
                    fontSize: 25, textTransform: 'uppercase', fontWeight: 'bold'
                }}>Critica</Text>
            );

            default: return (
                'Nout Found -);'
            );
        }
    }

    useEffect(() => {
        let isActive = true;
        const ac = new AbortController();

        async function getLocale() {
            try {
                const response = await api.get("/current.json", {
                    params: {
                        q: route?.params?.name,
                        key: key,
                        aqi: 'yes',
                        lang: 'pt-BR'
                    }
                })
                if (isActive) {
                    setCity(response.data)
                    console.log(response.data)

                    let numero = response.data

                    setNumber(numero.current.air_quality['us-epa-index'])

                    setLoading(false)


                }
            }
            catch (err) {
                alert('Local não encontrado, tente novamente!', err)
                setLoading(false)
            }
        }

        if (isActive) {
            getLocale();

        }

        return () => {
            isActive = false;
            ac.abort();
        }

    }, [])


    if (loading) {
        return (
            <Container style={{ align: 'center', justifyContent: 'center', flex: 1 }}>
                <ActivityIndicator color="#fff" size="large"></ActivityIndicator>
            </Container>
        );
    }



    function openModal() {
        modalizeRef.current?.open();
    }

    let Ozonio = city.current.air_quality.o3
    let pm10 = city.current.air_quality.pm10


    function numberPoluent() {
        if (Ozonio > pm10) {
            return Ozonio.toFixed(0)
        } else {
            return pm10.toFixed(0)
        }
    }


    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AreaView>
                    <AreaCircle props={number}
                        style={{ width: Platform.OS === 'ios' ? '75%' : '80%' }}
                    >
                        <Locations>
                            {city.location.name}
                        </Locations>

                        <Locations>
                            {city.location.region}, {city.location.country}
                        </Locations>

                        <NumberIndice>{numberPoluent()}</NumberIndice>
                    </AreaCircle>
                    <AreaIcon>
                        <Feather name="wind" size={50} color="#fff"></Feather>
                    </AreaIcon>
                </AreaView>

                <AreaInfo>
                    <ButtonInfo onPress={openModal}>
                        <Ionicons name="information-circle-outline"
                            size={45} color="#48cae4"></Ionicons>
                    </ButtonInfo>

                    <ButtonInfo onPress={() => favoriteLocal(
                        city)}>
                        {localFavorite ? (
                            <Ionicons name="bookmark"
                                size={45} color="#fff"></Ionicons>
                        ) : (
                            <Ionicons name="bookmark-outline"
                                size={45} color="#fff"></Ionicons>
                        )}

                    </ButtonInfo>
                </AreaInfo>

                <Status
                    style={{
                        width: Platform.OS === 'ios' ? '95%' : '100%',
                        marginLeft: Platform.OS === 'ios' ? 10 : 0
                    }}
                    props={number}>{statusText()}</Status>
            </ScrollView>


            <Modalize
                ref={modalizeRef}
                snapPoint={300}
                modalHeight={600}
            >
                <DetailPolu data={city} number={number} />
            </Modalize>

        </Container>
    );
}

export default Search;




