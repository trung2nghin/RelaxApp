import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Music from '../screens/mainTab/Music';
import MainTab from './MainTab';
import PlayingMusic from '../screens/mainTab/PlayingMusic';
import {ISong} from '../data/itemSong';
import WelcomeScreen from '../screens/StartScreen';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  SleepMusic: undefined;
  Music: {
    listSong: ISong[];
  };
  Home: undefined;
  MainTab: undefined;
  Meditate: undefined;
  PlayingMusic: undefined;
  ShortPlaying: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainTab"
          component={MainTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PlayingMusic"
          component={PlayingMusic}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Music"
          component={Music}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
