import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TextProps} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import {RootState} from '../reduxs/store';
interface Props {
  children: string;
  txtProps?: TextProps;
}

const Txt = ({children, ...txtProps}: Props) => {
  const color = useSelector<RootState, string>(state => state.theme.color);
  return (
    <Text color={color} {...txtProps}>
      {children}
    </Text>
  );
};

export default Txt;

const styles = StyleSheet.create({});
