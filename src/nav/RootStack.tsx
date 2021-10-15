import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeSleep from '../screens/mainTab/Sleep/index';
import Music from '../screens/mainTab/Music';
import SleepMusic from '../screens/mainTab/Sleep/TrackList';
import Home from '../screens/StartScreen';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import MainTab from './MainTab';

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  WelcomeSleep: undefined;
  SleepMusic: undefined;
  Music: undefined;
  Home: undefined;
  MainTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="WelcomeSleep"
          component={WelcomeSleep}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Music"
          component={Music}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="MainTab"
          component={MainTab}
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
