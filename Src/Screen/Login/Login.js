import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import fonts from '../../common/fonts'
import FontsSize from '../../common/FontsSize'
import Styles from './Styles'
import CustomInput from '../../common/CustomInput'
import { Colors } from '../../common/color'
import CustomButton from '../../common/CustomButton'
import MarginHW from '../../common/MarginHW'
import ImagePath from '../../common/ImagePath'

const Login = (props) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#EEF5FF'}}>
      <Image source={ImagePath.bgimage} style={Styles.logoimage}/>
      <View>
      <Text style={Styles.maintext}>Login</Text>
      <View>
      <CustomInput
      placeholder="Email"
      placeholderTextColor={Colors.black}
      />
      </View>
      <View>
      <CustomInput
      placeholder="Password"
      placeholderTextColor={Colors.black}
      />
      </View>
      <View style={{alignItems:'center',marginVertical:MarginHW.MarginH30}}>
        <CustomButton title={'Login'}/>
        </View>
      </View>

      <View style={{flexDirection:'row'}}>
        <Text style={Styles.subtext}>Haven't Registered yet ?</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Registration')}>
        <Text style={[Styles.subtext,{color:'black',paddingLeft:MarginHW.MarginW10,textDecorationLine:'underline'}]}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login