import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { Container, ListCity } from './styles';
import api, { key } from '../../services/api';

import FlatItem from '../../components/FlatItem';


function Search() {
    const route = useRoute();
    const [cidade, setCidade] = useState([]);


    useEffect(() => {
        let isActive = true;

        async function getLocale() {
            const response = await api.get("/current.json", {
                params: {
                    q: route?.params?.name,
                    key: key,
                    aqi: 'yes'
                }
            })
            if (isActive) {
                setCidade([response.data])

                //console.log(response.data)

            }

        }

        if (isActive) {
            getLocale();
        }

        return () => {
            isActive = false;
        }


    }, [])



    return (
        <Container>
            <ListCity
                data={cidade}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <FlatItem data={item} />}

            ></ListCity>
        </Container>
    );
}

export default Search;



