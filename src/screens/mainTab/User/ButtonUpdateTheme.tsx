import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Text} from 'react-native';
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
      style={styles.btn}
      onPress={() => {
        if (isThemeLight) {
          dispatch(onUpdateTheme(darkTheme));
        } else {
          dispatch(onUpdateTheme(lightTheme));
        }
      }}>
      <Text>Change Themes</Text>
    </TouchableOpacity>
  );
};

export default ButtonUpdateTheme;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FFF',
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    margin: 18,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 3,
  },
});
