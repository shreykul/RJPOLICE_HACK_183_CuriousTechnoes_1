import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import fonts from '../../common/fonts'
import FontsSize from '../../common/FontsSize'
import Styles from './Styles'
import CustomInput from '../../common/CustomInput'
import { Colors } from '../../common/color'
import CustomButton from '../../common/CustomButton'
import MarginHW from '../../common/MarginHW'
import ImagePath from '../../common/ImagePath'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { auth } from '../../Service/Service'
import { handleNavigation } from '../../../Routes/Routes'





const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const HandleLogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log('User', user)
        handleNavigation({ type: 'setRoot', navigation: props.navigation, page: 'Homescreen' })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Code', errorCode)
        console.log('Message', errorMessage)
      });

  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEF5FF' }}>
      <Image source={ImagePath.bgimage} style={Styles.logoimage} />


      <KeyboardAwareScrollView>
      <Text style={Styles.maintext}>Login</Text>

        <View>
          <CustomInput
            placeholder="Email"
            placeholderTextColor={Colors.black}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <CustomInput
            placeholder="Password"
            placeholderTextColor={Colors.black}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </KeyboardAwareScrollView>
      <View style={{ alignItems: 'center', marginVertical: MarginHW.MarginH30 }}>
        <CustomButton title={'Login'} Onclick={HandleLogin} />
      </View>


      <View style={{ flexDirection: 'row' }}>
        <Text style={Styles.subtext}>Haven't Registered yet ?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Registration')}>
          <Text style={[Styles.subtext, { color: 'black', paddingLeft: MarginHW.MarginW10, textDecorationLine: 'underline' }]}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login