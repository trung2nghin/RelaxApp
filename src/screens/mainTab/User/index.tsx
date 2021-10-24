import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonUpdateTheme from './ButtonUpdateTheme';
import Container from '../../../components/Container';
import Txt from '../../../components/Txt';

const User = () => {
  return (
    <Container>
      <View style={{width: 70, height: 100}}>
        <ButtonUpdateTheme />
      </View>
    </Container>
  );
};

export default User;

const styles = StyleSheet.create({});
