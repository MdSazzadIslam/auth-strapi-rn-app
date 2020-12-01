import React from 'react';

import AuthStackNavigator from '../src/navigators/AuthStackNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LightTheme from '../src/themes/LightTheme';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={LightTheme}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
