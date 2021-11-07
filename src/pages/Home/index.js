import React, { useState } from "react";
import {
    Container,
    SearchContainer,
    Title,
    Input,
    SearchButton,
    SearchInput

} from './styles'
import { ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header'
import Search from "../../pages/Search";

function Home() {

    const navigation = useNavigation();
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(true);

    function handleSearch() {

        if (input === '') {
            return;
        }



        navigation.navigate('Search', {
            name: input
        })

        setInput('')



    }



    return (

        <Container>
            <Header />

            <SearchContainer>
                <Title>Air quality</Title>

                <SearchInput>
                    <Input
                        value={input}
                        onChangeText={(text) => setInput(text)}
                        placeholder="Ex. Peruíbe"
                        placeholderTextColor="#6c757d">
                    </Input>

                    <SearchButton onPress={handleSearch}>
                        <Feather name="search" size={35} color="#fff" />
                    </SearchButton>

                </SearchInput>
            </SearchContainer>

        </Container>

    );
}

export default Home;