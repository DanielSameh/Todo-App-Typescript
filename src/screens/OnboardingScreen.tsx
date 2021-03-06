import React, {FC} from 'react'
import {  View,StyleSheet, Image } from 'react-native'
import Input from '../components/core/Input'
import Row from '../components/layout/Row'
import ScreenContainer from '../components/layout/ScreenContainer'
import TaskList from '../components/core/TaskList'
import Typography from '../components/core/Typograpghy'
import colors from '../styles/colors'

const OnboardingScreen: FC = () => {
    let date = new Date().toDateString();
     
    return (
       <ScreenContainer backgroundColor={colors.offWhite}  >
        <View style={styles.topBoardStyle}>
        <Typography  text={date} color={colors.white} size={20} textAlign={"center"} />  
        <Image
        
      style={{height:'60%', width:'60%',resizeMode: 'contain',marginTop:10} }
        source={{
          uri: 'https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png',
        }}
      />
     
        </View>
          
           <Row justifyContent={"space-around"} width={"60%"}>
           </Row>
           <TaskList/>
           <View style={{marginTop:20}}>
            <Input icon="add-circle" placeholder="Add Task"  />
            </View>
           </ScreenContainer>
    )
}

export default OnboardingScreen
const styles = StyleSheet.create({
    topBoardStyle:{
      height:'25%',
      backgroundColor:'#50C2C9',
      alignItems:'center'
    }
  })
  