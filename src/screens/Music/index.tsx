import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';
import {View, Text, Image, Colors} from 'react-native-ui-lib';
import Slider from '@react-native-community/slider';
import {RootStackParamList} from '../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

// @ts-ignore
import playlistData from './main/data/playlist.json';
// @ts-ignore
import localTrack from './main/resources/pure.m4a';

type MusicScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Music'
>;

type Props = {
  navigation: MusicScreenNavigationProp;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Music = ({navigation}: Props) => {
  return (
    <View flex>
      <Image assetGroup="WelcomeSleep" assetName="bg" style={styles.bg} />
      <View flex row marginT-35>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image assetGroup="icons" assetName="x" />
        </TouchableOpacity>

        <View flex row right>
          <TouchableOpacity style={styles.like}>
            <Image assetGroup="icons" assetName="Heart" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.download}>
            <Image assetGroup="icons" assetName="Down" />
          </TouchableOpacity>
        </View>
      </View>

      <View flex marginL-15 marginT-30>
        <View marginT-40 center>
          <Text b34 textColor4 marginB-10>
            Night Island
          </Text>
          <Text m14 textColor7>
            SLEEP MUSIC
          </Text>
        </View>
      </View>

      <View flex>
        <View row flex style={styles.viewplay}>
          <TouchableOpacity>
            <Image assetGroup="playicons" assetName="back15" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.pause}>
            <Image assetGroup="playicons" assetName="pause" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image assetGroup="playicons" assetName="next15" />
          </TouchableOpacity>
        </View>

        {/* slider */}
        <View flex>
          <Slider
            style={styles.slider}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#8E97FD"
            minimumTrackTintColor="#E6E7F2"
            maximumTrackTintColor="#3F414E"
            onSlidingComplete={() => {}}
          />
          <View row style={styles.time}>
            <Text textColor4>1:00</Text>
            <Text textColor4>4:30</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
   
export default Music;

const styles = StyleSheet.create({
  bg: {
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'stretch',
    width: width,
    height: height,
  },
  close: {
    width: 55,
    height: 55,
    backgroundColor: Colors.bgColor1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2,
    marginLeft: 20,
  },
  like: {
    width: 55,
    height: 55,
    backgroundColor: Colors.textColor6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2,
    marginRight: 10,
  },
  download: {
    width: 55,
    height: 55,
    backgroundColor: Colors.textColor6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2,
    marginRight: 10,
  },
  pause: {
    width: 55,
    height: 55,
    backgroundColor: Colors.textColor6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2,
    marginRight: 70,
    marginLeft: 70,
  },
  viewplay: {justifyContent: 'center'},
  slider: {
    width: 340,
    height: 40,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  time: {
    width: 340,
    justifyContent: 'space-between',
    marginLeft: 30,
  },
});
