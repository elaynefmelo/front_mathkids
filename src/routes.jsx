import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaAulas from './app/telaAulas'
import TelaProgresso from './app/telaProgresso'
import TelaConfig from './app/telaConfig'
import Login from './app/login'


const Tab = createBottomTabNavigator();

export const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TelaAulas" component={TelaAulas} />
      <Tab.Screen name="TelaProgresso" component={TelaProgresso} />
      <Tab.Screen name="TelaConfig" component={TelaConfig} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};