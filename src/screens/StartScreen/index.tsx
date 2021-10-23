import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import Container from '../../components/Container';
import Txt from '../../components/Txt';
import {RootStackParamList} from '../../nav/RootStack';

const WelcomeScreen = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Container style={{backgroundColor: 'rgba(140, 150, 255, 1)'}}>
      <View flex marginT-32>
        <Txt marginT-32 m30 center>
          Hi Afsar, Welcome to {'\n'} Silent Moon
        </Txt>
        <Txt l16 center marginT-24>
          Explore the app, Find some peace of mind to {'\n'} prepare for
          meditation.
        </Txt>
        <View center marginT-76>
          <Image source={require('../../assets/med.png')} />
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            height: 63,
            width: 374,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            alignSelf: 'center',
            marginTop: 42,
          }}
          onPress={() => navigate('MainTab')}>
          <Text color="grey" b16>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
