import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native'
import fonts from '../../common/fonts'
import FontsSize from '../../common/FontsSize'
import Styles from './Styles'
import CustomInput from '../../common/CustomInput'
import { Colors } from '../../common/color'
import CustomButton from '../../common/CustomButton'
import MarginHW from '../../common/MarginHW'
import ImagePath from '../../common/ImagePath'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { auth } from '../../..'


const Registration = (props) => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const HandleSignup=()=>{
   
    createUserWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Code',errorCode)
        console.log('Message',errorMessage)
      });
    
      }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEF5FF' }}>
      <Image source={ImagePath.bgimage} style={Styles.logoimage}/>
      <KeyboardAwareScrollView>
        <Text style={[Styles.maintext,{marginVertical:MarginHW.MarginH10}]}>Registration</Text>
        <View style={{bottom:MarginHW.MarginH10}}>
          <CustomInput
            placeholder="Enter User Name"
            placeholderTextColor={Colors.black}
          />
        </View>
        <View style={{bottom:MarginHW.MarginH20}}>
          <CustomInput
            placeholder="Enter password"
            placeholderTextColor={Colors.black}
            value={password}
            onChangeText={(text)=>setPassword(text)}
          />
        </View>
        <View style={{bottom:MarginHW.MarginH20}}>
          <CustomInput
            placeholder="Confirm password"
            placeholderTextColor={Colors.black}
          />
        </View>
        <View style={{bottom:MarginHW.MarginH20}}>
          <CustomInput
            placeholder="Enter Your Email"
            placeholderTextColor={Colors.black}
            value={email}
            onChangeText={(text)=>setEmail(text)}
          />
        </View>
        <View style={{ alignItems: 'center' }}>
          <CustomButton title={'Registration'} Onclick={HandleSignup} />
        </View>

      </KeyboardAwareScrollView>

      <View style={{ flexDirection: "row",justifyContent:'center',alignItems:'center' }}>
        <Text Styles={Styles.subtext}>Already have an Account?</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
          <Text style={[Styles.subtext, { color: 'black', paddingLeft: MarginHW.MarginW10, textDecorationLine: 'underline' }]}>Login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default Registration