import React from 'react';

import Login from '../screens/Login';
import Registration from '../screens/Registration';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'Login'} component={Login} />
      <AuthStack.Screen name={'Registration'} component={Registration} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
