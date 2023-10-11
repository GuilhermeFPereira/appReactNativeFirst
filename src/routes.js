/* eslint-disable prettier/prettier */
import React from 'react';
import {Box, Title} from './components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from './pages/Home';
import Feed from './pages/Feed';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{
              headerShown: false,
            }} name="Feed" component={Feed} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
