import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import App from '../../App';
import { doc, getFirestore } from "firebase/firestore";



export default function AddTelaPostagem() {

  const db = getFirestore(App);

  useEffect(()=>{
    getCategoryList();
  },[])
  const getCategoryList=async()=>{
    const querySnapshot=await getDocs(collections(db,'Category'));

    querySnapshot.forEach((doc)=>{
      console.log("Docs:",doc.data());
    })
  }
  return (
    <View>
      <Text>AddTelaPostagem</Text>
    </View>
  )
}