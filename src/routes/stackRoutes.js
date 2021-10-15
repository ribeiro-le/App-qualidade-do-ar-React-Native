import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Sua busca',
                    headerTintColor: '#fff',

                    headerTitleStyle: {
                        color: '#fff'
                    },

                    headerStyle: {
                        backgroundColor: '#121214'

                    }
                }}

            ></Stack.Screen>
        </Stack.Navigator>

    );
}

export default StackRoutes;