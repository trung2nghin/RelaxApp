import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Text, Colors, Image} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';
import SleepMusic from './TrackList';

type WelcomeSleepScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WelcomeSleep'
>;

type Props = {
  navigation: WelcomeSleepScreenNavigationProp;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const WelcomeSleep = ({navigation}: Props) => {
  return (
    <View flex backgroundColor={Colors.bgColor2}>
      <Image
        assetGroup="WelcomeSleep"
        assetName="welcomesleep"
        style={styles.bg}
      />
      <Image assetGroup="WelcomeSleep" assetName="bgsleep" style={styles.bg1} />
      <View flex center marginT-50>
        <Text b28 marginB-15 textColor4>
          Welcome to Sleep
        </Text>
        <View center>
          <Text r14 textColor3 marginB-8>
            Explore the new king of sleep. It uses sound
          </Text>
          <Text r14 textColor3 marginB-8>
            and vesualization to create perfect conditions
          </Text>
          <Text r14 textColor3 marginB-8>
            for refreshing sleep.
          </Text>
        </View>
      </View>

      <View flex center>
        <Image assetGroup="WelcomeSleep" assetName="Bird" style={styles.img} />
      </View>

      <View flex center>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('SleepMusic');
          }}>
          <Text m14 textColor8>
            GET STARTED
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeSleep;

const styles = StyleSheet.create({
  bg: {
    alignSelf: 'center',
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'stretch',
  },
  bg1: {
    alignSelf: 'center',
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'stretch',
  },
  img: {alignSelf: 'center', marginTop: 55, position: 'absolute'},
  btn: {
    width: 350,
    height: 60,
    backgroundColor: '#8E97FD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 38,
  },
});
