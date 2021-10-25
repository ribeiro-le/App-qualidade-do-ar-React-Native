import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { Container, ListCity } from './styles';
import api, { key } from '../../services/api';

import FlatItem from '../../components/FlatItem';


function Search() {
    const route = useRoute();
    const [city, setCity] = useState([]);


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
                    setCity([response.data])

                    //console.log(response.data)
                }
            }
            catch (err) {
                alert('Local não encontrado, tente novamente!', err)
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


    return (
        <Container>
            <ListCity
                data={city}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <FlatItem data={item} />}

            ></ListCity>
        </Container>
    );
}

export default Search;



