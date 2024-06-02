import { View, Text,StatusBar, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function TelaLogin() {
  return (
    <View>
      <Image source={require('./../../assets/Images/login.jpg')}
         className="w-full h-[400px] object-cover"
      />
      <View className= "p-8 bg-slate-400 rounded-3xl">
        <Text className="text-[30px] font-bold">Pedidos de Peças 3D</Text>
          <TouchableOpacity onPress={()=>console.log("Vamos Começar")}
          className="p-4 bg-blue-500 rounded-full mt-10">
            <Text className="text-white text-center text-[18px]">
              Vamos Começar
            </Text>
          </TouchableOpacity>
      </View>

    </View>
  )
}