import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../reduxs/store';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container = ({children, style}: Props) => {
  const backgroundColor = useSelector<RootState, string>(
    state => state.theme.backgroundColor,
  );

  return (
    <View style={{flex: 1, backgroundColor: backgroundColor, ...style}}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({});
