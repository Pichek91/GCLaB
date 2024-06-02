import { View, Text,StatusBar, Image} from 'react-native'
import React from 'react'

export default function TelaLogin() {
  return (
    <View>
      <Image source={require('./../../assets/Images/login.jpg')}
         className="w-full h-[400px] object-cover"
      />
      <View className= "p-5 justify-center align-center">
        <Text className="text-[30px] font-bold justify-center">Pedidos de Peças 3D</Text>
      </View>

    </View>
  )
}