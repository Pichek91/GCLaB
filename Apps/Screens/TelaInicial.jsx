import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TelaInicial() {
  return (
    <View style={styles.container}>
      <Text>TelaInicial</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f4ff',
    paddingHorizontal:18
  },
  title:{
    fontSize:34,
    marginBottom:34,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#121212',
    fontWeight:'bold'
  },
  input:{
    width:'100%',
    height: 40,
    backgroundColor:'#ffffff',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    color:'#121212'
  },
  button:{
    width:'50%',
    height: 60,
    backgroundColor: '#45d800',
    borderRadius: 8,
    marginBottom: 8,
    justifyContent:'center',
    alignItems: 'center',
  },
  buttonText:{
    color:'#fff',
    justifyContent:'center',
    fontWeight:'bold',
    fontSize: 18
  },
  labelError:{
    width: '100%',
    alignSelf:'flex-start',
    color:'#ff375b',
    marginBottom: 8, 
  }

})