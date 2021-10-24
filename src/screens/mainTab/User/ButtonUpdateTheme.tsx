import React from 'react';
import {StyleSheet, Button, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Txt from '../../../components/Txt';
import {AppDispatch, RootState} from '../../../reduxs/store';
import {darkTheme, lightTheme, onUpdateTheme} from '../../../reduxs/themeSlice';

const ButtonUpdateTheme = () => {
  const isThemeLight = useSelector<RootState, boolean>(
    state => state.theme.isThemeLight,
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <TouchableOpacity
      style={{
        width: 120,
        height: 40,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
      }}
      onPress={() => {
        if (isThemeLight) {
          dispatch(onUpdateTheme(darkTheme));
        } else {
          dispatch(onUpdateTheme(lightTheme));
        }
      }}>
      <Txt>Change Themes</Txt>
    </TouchableOpacity>
  );
};

export default ButtonUpdateTheme;

const styles = StyleSheet.create({});
