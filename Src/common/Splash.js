import { View, Text, Image } from 'react-native'
import React from 'react'
import ImagePath from './ImagePath'
import ImageSize from './ImageSize'
import MarginHW from './MarginHW'
import fonts from './fonts'
import FontsSize from './FontsSize'

const Splash = () => {
  return (
    <View  style={{flex:1,backgroundColor:'#EEF5FF'}}>
     <Image source={ImagePath.App_logo} style={Styles.logoimage}/>
     <View style={{alignItems:'center',marginVertical:MarginHW.MarginH40}}>
     <Text style={{color:'black',fontFamily:fonts.PoppinsMedium,fontSize:FontsSize.size26,letterSpacing:3}}>FeedPlus</Text>
     </View>
    </View>
  )
}
const Styles = {
logoimage:{width:ImageSize.ImageW100,height:ImageSize.ImageH115,alignSelf:'center',marginTop:MarginHW.MarginH100}
}

export default Splash