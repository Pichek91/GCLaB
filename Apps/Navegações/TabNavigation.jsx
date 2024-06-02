import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreTelas from '../Screens/ExploreTelas';
import AddTelaPostagem from '../Screens/AddTelaPostagem';
import TelaPerfil from '../Screens/TelaPerfil';
import TelaInicial from '../Screens/TelaInicial';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name= 'home' component={TelaInicial}/>
        <Tab.Screen name= 'explore' component={ExploreTelas}/>
        <Tab.Screen name= 'addpost' component={AddTelaPostagem}/>
        <Tab.Screen name= 'profile' component={TelaPerfil}/>
    </Tab.Navigator>
  )
}