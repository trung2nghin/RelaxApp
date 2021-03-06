import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/mainTab/Home';
import Meditate from '../screens/mainTab/Meditate';
import Music from '../screens/mainTab/Music';
import Sleep from '../screens/mainTab/Sleep/TrackList';
import User from '../screens/mainTab/User';
import {Image, Colors} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import {RootState} from '../reduxs/store';

export type MainTabParamList = {
  Home: undefined;
  Sleep: undefined;
  Meditate: undefined;
  Music: undefined;
  User: undefined;
};

const Tab = createBottomTabNavigator();
const MainTab = () => {
  const isThemeLight = useSelector<RootState, boolean>(
    state => state.theme.isThemeLight,
  );
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: isThemeLight ? '#FFF' : '#1f1f1f',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image assetGroup="iconsTab" assetName="Home" tintColor={color} />
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
        name="Meditate"
        component={Meditate}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Image
              assetGroup="iconsTab"
              assetName="Meditate"
              tintColor={color}
            />
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

const stlyes = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default MainTab;
