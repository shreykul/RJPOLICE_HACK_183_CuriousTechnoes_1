import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
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


const Registration = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#EEF5FF'}}> 
    <View>
      <Text style={Styles.maintext}>Registration</Text>
    <View>
    <CustomInput
    placeholder = "Enter User Name"
    placeholderTextColor={Colors.black}
    />
    </View>
    <View>
        <CustomInput
        placeholder="Enter PASSWORD"
        placeholderTextColor={Colors.black}
        />
    </View>
    <View>
        <CustomInput
        placeholder="Confirm PASSWORD"
        placeholderTextColor={Colors.black}
        />
    </View>
    <View>
        <CustomInput
        placeholder="Enter Your Email "
        placeholderTextColor={Colors.black}
        />
    </View>
    <View style={{alignItems:'center',marginVertical:MarginHW.MarginH30}}>
        <CustomButton title={'Registration'}/>
        </View>

    </View>

    <view style={{flexDirection:"row"}}>
        <Text Styles={Styles.subtext}>Alredy Have Account </Text>
        <TouchableOpacity>
            <Text style={[Styles.subtext,{color:'black',paddingLeft:MarginHW.MarginW10,textDecorationLine:'underline'}]}>Login</Text>
            <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
      />
        </TouchableOpacity>

    </view>
    </SafeAreaView>
  )
}

export default Registration