import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Src/Screen/Login/Login';
import Splash from '../Src/common/Splash';
import Registration from '../Src/Screen/Login/Registration';

const Stack = createStackNavigator();


function Routes(props) {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
  
      </NavigationContainer>
    );
  }
  export function handleNavigation(nav) {
    switch (nav.type) {
        case 'push':
            nav.navigation.navigate(nav.page, nav.passProps);
            break;
        case 'setRoot':
            nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] })
            break;
        case 'pop':
            nav.navigation.goBack();
            break;
        case 'popToTop':
            nav.navigation.popToTop();
            break;
    }
  }
  

export default Routes