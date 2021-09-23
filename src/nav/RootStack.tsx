import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeSleep from '../screens/WelcomeSleep';
import Music from '../screens/Music';
import SleepMusic from '../screens/SleepMusic';

export type RootStackParamList = {
  WelcomeSleep: undefined;
  SleepMusic: undefined;
  Music: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeSleep"
          component={WelcomeSleep}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Music"
          component={Music}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SleepMusic"
          component={SleepMusic}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
