import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreTelas from '../Screens/ExploreTelas';
import AddTelaPostagem from '../Screens/AddTelaPostagem';
import TelaPerfil from '../Screens/TelaPerfil';
import TelaInicial from '../Screens/TelaInicial';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'rgb(29, 241, 9)'
    }}>
        <Tab.Screen name= 'home' component={TelaInicial}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}}>Inicio</Text>
      ),
            tabBarIcon:({color,size})=>(
              <FontAwesome name="home" size={size} color={color} />
            )
    }}
        />
        <Tab.Screen name= 'explore' component={ExploreTelas}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}}>Pesquisar</Text>
      ),
            tabBarIcon:({color,size})=>(
              <AntDesign name="search1" size={size} color={color} />
            )
    }}
        />
        <Tab.Screen name= 'addpost' component={AddTelaPostagem}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}}>Adicionar Peça</Text>
      ),
            tabBarIcon:({color,size})=>(
              <AntDesign name="upload" size={size} color={color} />
            )
    }}
        />
        <Tab.Screen name= 'profile' component={TelaPerfil}
        options={{
          tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,marginBottom:3}}>Editar Pedidos</Text>
      ),
            tabBarIcon:({color,size})=>(
              <AntDesign name="profile" size={size} color={color} />
            )
    }}
        />
    </Tab.Navigator>
  )
}