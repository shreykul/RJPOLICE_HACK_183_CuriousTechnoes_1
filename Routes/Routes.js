import { View, Text } from 'react-native'
import React from 'react'

const Stack = createStackNavigator();


function Routes(props) {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' >
        
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