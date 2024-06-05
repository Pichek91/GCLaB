import { View, Text } from 'react-native'
import React from 'react'
import App from '../../App';
import { getFirestore } from "firebase/firestore";



export default function AddTelaPostagem() {

  const db = getFirestore(App);
  const getCategoryList=()=>{}
  return (
    <View>
      <Text>AddTelaPostagem</Text>
    </View>
  )
}