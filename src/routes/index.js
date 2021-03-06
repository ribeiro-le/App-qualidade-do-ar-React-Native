import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'


import StackRoutes from './stackRoutes.js';


import { MaterialCommunityIcons } from '@expo/vector-icons'


const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#090a0e',
                    paddingTop: 20,
                    fontSize: 25
                },

                drawerActiveBackgroundColor: '#00b4d8',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff'

            }}

        >
            <Drawer.Screen
                name="HomeDrawer"
                component={StackRoutes}
                options={{
                    title: 'Inicio',

                    drawerIcon: ({ focused, size, color }) => (
                        <MaterialCommunityIcons
                            name={focused ? 'movie-open' : 'movie-outline'}
                            size={size}
                            color={color}
                        >

                        </MaterialCommunityIcons>
                    )
                }}
            />

        </Drawer.Navigator>
    )
}

export default Routes;