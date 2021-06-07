import React,{FC,useContext,useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Checkbox } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import TodoContext from '../../context/TodoContext';


type ItemType ={
  id:number
  task:string

}

const Item: FC<ItemType> = (props) =>{

  const [isSelected, setSelection] = useState(false);
  const {deleteTask} = useContext(TodoContext)

  return (
    <View style={styles.container}>
<View style={{flex:0.15}}>
      <Checkbox
      color={'#50C2C9'}
      status={isSelected ? 'checked' : 'unchecked'}
      onPress={() => {
        setSelection(!isSelected);
      }}
    />
    </View>
  
   <View style={{flex:1}}>
        <Text>{props.task}</Text>
        </View>

<View style={{flex:0.12}}>
  <TouchableOpacity onPress={()=>deleteTask(props.id)}>
<Ionicons name='trash'  size={25} color="#FF6262" />
</TouchableOpacity>
</View>
        
    </View>)
}



export default Item

const styles = StyleSheet.create({
  container:{
  flexWrap:'wrap',
  alignItems:'center',
  flexDirection:'row',
  borderBottomColor: '#aaa',
  padding:10,
  },
  checkbox: {
  alignSelf: "center",
  },
})
