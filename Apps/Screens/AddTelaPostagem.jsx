import React, { useState, useEffect} from "react"
import {SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet, Button,Image} from "react-native"
import { app } from "../Config/firebaseconfig"
import {getFirestore,getDocs, collection} from "firebase/firestore"
import { Formik } from "formik";
import { TextInput } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from 'expo-image-picker';


export default function Screens () {

    const [image, setImage] = useState(null);
    const db = getFirestore(app);
    const [categoryList, setCategoryList]=useState([]);

    useEffect(()=>{
        getCategoryList();
    },[])

    const getCategoryList=async ()=>{
        setCategoryList([]);
        const querySnapshot=await getDocs(collection(db,'Category'));

        querySnapshot.forEach((doc)=>{
            console.log("Docs:",doc.data());
            setCategoryList(categoryList=>[...categoryList,doc.data()])
        })

    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
   const onSubmitMethod=(value)=>{
        value.image=image;
        console.log(value)

   }

   return(
        <View style={styles.container}>
            <Text style={styles.titulo} >Adicionar uma Nova Peça</Text>
            <Formik 
                initialValues={{title:'', desc:'', category:'', price:'', address:'', image:''}}
                onSubmit={value=>onSubmitMethod(value)}
                >
                {({handleChange, handleBlur, handleSubmit, values, setFieldValue})=>(
                    <View>

                        <TouchableOpacity onPress={pickImage}>
                        {image?
                        <Image source={{uri:image}} style={{width:100, height:100, borderRadius: 25}} />
                        :
                        <Image source={require('./assets/placeholder.png')}
                        style={{width:100, height:100, borderRadius: 25}} 
                        />
                        }
                        
                        </TouchableOpacity>

                        <TextInput 
                            style={styles.input}
                            placeholder="Nome da Peça"
                            value={values?.title}
                            onChangeText={handleChange('title')}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="Descrição"
                            value={values?.desc}
                            numberOfLines={5}
                            onChangeText={handleChange('desc')}
                        />

                        <TextInput 
                            style={styles.input}
                            placeholder="Quantidade"
                            value={values?.price}
                            keyboardType="number-pad"
                            onChangeText={handleChange('price')}
                        />
                        <TextInput 
                            style={styles.input}
                            placeholder="Filial"
                            value={values?.address}
                            onChangeText={handleChange('address')}
                        />
                       <View style={{borderWidth:1,borderRadius:10,marginTop:15, marginBottom:30}}>
                       <Picker
                            selectedValue={values?.category}
                            className="border-2"
                            onValueChange={itemValue=>setFieldValue('category', itemValue)}
                        >
                            {categoryList && categoryList.map((item,index)=>(
                                <Picker.Item key={index}
                                    label={item.cliente} value={item.cliente}/>

                            ))}                          
                        </Picker>
                        </View>
                     
                        <Button onPress ={handleSubmit} 
                        className='mt-7'
                        title="submit"/>

                    </View>


                )}
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal:17,
        paddingTop:15,
        fontSize: 17,
        marginTop:10,
        textAlignVertical:'top',
        marginBottom: 5,
    },
    titulo: {
        fontSize:17,
        marginBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#121212',
        fontWeight:'bold'
      },
    container:{
        flex:1,
        backgroundColor:'#f0f4ff',
        paddingHorizontal:18
      },
})