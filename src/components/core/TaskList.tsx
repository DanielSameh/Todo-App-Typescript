
import { FlatList, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'
import Typography from './Typograpghy'
import Item from './ListItems'
import { Divider } from 'react-native-paper'
import TodoContext from '../../context/TodoContext'
import React,{FC,useContext, useState} from 'react'
import Row from '../layout/Row'
import colors from '../../styles/colors'

const TaskList:FC = () => {

const {todoTask} = useContext(TodoContext)
    return (
    <TaskContainer>

      <Row justifyContent={'space-between'} alignItems={'center'}>

    <Typography text={"Task List"} marginLeft={15} marginTop={15} fontWeight={"bold"} fontSize={18}/>  

    </Row>
 
    <FlatList data={todoTask}
        renderItem={({item}) =>(
            <View>
              <Divider/>
           < Item id={item.id} task={item.task} />
         
            </View>)}/>
         
    </TaskContainer>    
    
)
}

export default TaskList


const TaskContainer = styled.View`
width: 80%
height:50%
justify-content: space-around
align-self: center
background-color: ${colors.white}
border-radius: 15px
margin-top: 15px
elevation:6
`