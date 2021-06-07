import React, { FC, useContext,useState } from 'react'
import {  View,TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TodoContext from '../../context/TodoContext'

const {width} = Dimensions.get('screen')

 interface Props {
   icon: string
   placeholder: string

 }

const Input: FC<Props> = (props) => {
 
  const [inputValue, setInputValue] = useState<string>('');
  const { addTask } = useContext(TodoContext)

  return (
    <View style={styles.container}>

      <View style={{flex:0.1, alignItems:'flex-start'}}>
        <TouchableOpacity onPress={()=> {inputValue === ''? null : addTask(inputValue) , setInputValue('')}} >
        <Ionicons name= { props.icon}  size={22} color="#50C2C9" />
        </TouchableOpacity>
      </View>
      <View style={{flex:1 }}>
        <TextInput 
        placeholder={props.placeholder} 
        value={inputValue} 
        placeholderTextColor="#555" 
        onChangeText={(text)=>setInputValue(text)} 
        onEndEditing={()=>{inputValue === ''? null : addTask(inputValue), setInputValue('')}}/>
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container:{
    width: width / 1.05,
    flexDirection: 'row',
    justifyContent:'center',
    padding:5,
    alignItems:'center',
    alignSelf:'center',
    borderBottomColor: '#555',
    borderBottomWidth: 1,
  },
})
