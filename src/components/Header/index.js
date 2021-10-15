import React from 'react';
import { Container, MenuButton } from './styles';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


function Header() {
    const navigation = useNavigation();
    return (
        <Container>
            <MenuButton onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={36} color={'#00b4d8'} />
            </MenuButton>
        </Container>
    );
}

export default Header;