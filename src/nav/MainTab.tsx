import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/mainTab/Home';
import Meditate from '../screens/mainTab/Meditate';
import Music from '../screens/mainTab/Music';
import Sleep from '../screens/mainTab/Sleep/index';
import User from '../screens/mainTab/User';
import {Image, Colors} from 'react-native-ui-lib';
import { OffsetType } from 'react-native-ui-lib/generatedTypes/src/hooks/useScrollToItem';

export type MainTabParamList = {
  Home: undefined;
  Sleep: undefined;
  Music: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator();
const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image assetGroup="iconsTab" assetName="Home" tintColor={color}/>
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="Sleep"
        component={Sleep}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image assetGroup="iconsTab" assetName="Moon" tintColor={color} />
          ),
        }}></Tab.Screen>


      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image assetGroup="iconsTab" assetName="Music" tintColor={color} />
          ),
        }}></Tab.Screen>

      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image assetGroup="iconsTab" assetName="User" tintColor={color} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainTab;
