import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {View, Text, Image, Colors} from 'react-native-ui-lib';
import Slider from '@react-native-community/slider';

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
import Ionicons from 'react-native-vector-icons/Ionicons';

// @ts-ignore
import playlistData from '../../../data/itemSong';
import {RootStackParamList} from '../../../nav/RootStack';
// @ts-ignore
// import localTrack from './main/resources/slide.m4a';

type MusicScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Music'
>;

type Props = {
  navigation: MusicScreenNavigationProp;
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

// {
const setupIfNecessary = async () => {
  // if app was relaunched and music was already playing, we don't setup again.
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    return;
  }

  await TrackPlayer.setupPlayer({});
  await TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
      Capability.Stop,
    ],
    compactCapabilities: [Capability.Play, Capability.Pause],
  });

  await TrackPlayer.add(playlistData);
  // await TrackPlayer.add({
  //   url: ,
  //   title: 'Slide',
  //   artist: 'Calvin Harris ft. Frank Ocean, Migos',
  //   artwork:
  //     'https://images-na.ssl-images-amazon.com/images/I/81nldVd81bL._SL1432_.jpg',
  //   duration: 28,
  // });

  TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

const togglePlayback = async (playbackState: State) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack == null) {
    // TODO: Perhaps present an error or restart the playlist?
  } else {
    if (playbackState === State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};

// }
// {
const Music = ({navigation}: Props) => {
  const playbackState = usePlaybackState();
  const progress = useProgress();

  const [trackArtwork, setTrackArtwork] = useState<string | number>();
  const [trackTitle, setTrackTitle] = useState<string>();
  const [trackArtist, setTrackArtist] = useState<string>();
  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track || {};
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  useEffect(() => {
    setupIfNecessary();
  }, []);
  // }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <Image assetGroup="WelcomeSleep" assetName="bg" style={styles.bg} />

      <View row marginT-35>
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

      <View style={styles.contentContainer}>
        <Image style={styles.artwork} source={{uri: `${trackArtwork}`}} />
        <Text b34 textColor4 marginB-10>
          {trackTitle}
        </Text>
        <Text m14 textColor7>
          {trackArtist}
        </Text>
        <Slider
          style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#8E97FD"
          minimumTrackTintColor="#E6E7F2"
          maximumTrackTintColor="#3F414E"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelText}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Text>
          <Text style={styles.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Text>
        </View>
      </View>

      <View style={styles.actionRowContainer}>
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          {/* <Image assetGroup="playicons" assetName="back15" /> */}
          <Ionicons name="play-skip-back" size={35} color={'white'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => togglePlayback(playbackState)}>
          <Ionicons
            name={
              playbackState === State.Playing
                ? 'ios-pause-circle-outline'
                : 'ios-play-circle-outline'
            }
            size={90}
            color={'white'}></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
          <Ionicons name="play-skip-forward" size={35} color={'white'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  bg: {
    alignSelf: 'center',
    position: 'absolute',
    resizeMode: 'stretch',
    width: width,
    height: height,
  },
  contentContainer: {
    // flex: 1,
    alignItems: 'center',
    // backgroundColor: 'blue',
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
  topBarContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  artwork: {
    width: 240,
    height: 240,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginTop: 30,
  },
  artistText: {
    fontSize: 16,
    fontWeight: '200',
    color: 'white',
  },
  progressContainer: {
    height: 40,
    width: 340,
    marginTop: 25,
    flexDirection: 'row',
  },
  progressLabelContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'yellow',
  },
  progressLabelText: {
    color: 'white',
    fontVariant: ['tabular-nums'],
  },
  actionRowContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
});

export default Music;

//   return (
//     <View flex>
//       <Image assetGroup="WelcomeSleep" assetName="bg" style={styles.bg} />
//       <View flex row marginT-35>
//         <TouchableOpacity
//           style={styles.close}
//           onPress={() => {
//             navigation.goBack();
//           }}>
//           <Image assetGroup="icons" assetName="x" />
//         </TouchableOpacity>

//         <View flex row right>
//           <TouchableOpacity style={styles.like}>
//             <Image assetGroup="icons" assetName="Heart" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.download}>
//             <Image assetGroup="icons" assetName="Down" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View flex marginL-15 marginT-30>
//         <View marginT-40 center>
//           <Text b34 textColor4 marginB-10>
//             Night Island
//           </Text>
//           <Text m14 textColor7>
//             SLEEP MUSIC
//           </Text>
//         </View>
//       </View>

//       <View flex>
//         <View row flex style={styles.viewplay}>
//           <TouchableOpacity>
//             <Image assetGroup="playicons" assetName="back15" />
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.pause}>
//             <Image assetGroup="playicons" assetName="pause" />
//           </TouchableOpacity>

//           <TouchableOpacity>
//             <Image assetGroup="playicons" assetName="next15" />
//           </TouchableOpacity>
//         </View>

//         {/* slider */}
//         <View flex>
//           <Slider
//             style={styles.slider}
//             value={10}
//             minimumValue={0}
//             maximumValue={100}
//             thumbTintColor="#8E97FD"
//             minimumTrackTintColor="#E6E7F2"
//             maximumTrackTintColor="#3F414E"
//             onSlidingComplete={() => {}}
//           />
//           <View row style={styles.time}>
//             <Text textColor4>1:00</Text>
//             <Text textColor4>4:30</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Music;

// // const styles = StyleSheet.create({
// //   bg: {
// //     alignSelf: 'center',
// //     position: 'absolute',
// //     resizeMode: 'stretch',
// //     width: width,
// //     height: height,
// //   },
// //   close: {
// //     width: 55,
// //     height: 55,
// //     backgroundColor: Colors.bgColor1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     borderRadius: 55 / 2,
// //     marginLeft: 20,
// //   },
// //   like: {
// //     width: 55,
// //     height: 55,
// //     backgroundColor: Colors.textColor6,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     borderRadius: 55 / 2,
// //     marginRight: 10,
// //   },
// //   download: {
// //     width: 55,
// //     height: 55,
// //     backgroundColor: Colors.textColor6,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     borderRadius: 55 / 2,
// //     marginRight: 10,
// //   },
// //   pause: {
// //     width: 55,
// //     height: 55,
// //     backgroundColor: Colors.textColor6,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     borderRadius: 55 / 2,
// //     marginRight: 70,
// //     marginLeft: 70,
// //   },
// //   viewplay: {justifyContent: 'center'},
// //   slider: {
// //     width: 340,
// //     height: 40,
// //     flexDirection: 'row',
// //     alignSelf: 'center',
// //   },
// //   time: {
// //     width: 340,
// //     justifyContent: 'space-between',
// //     marginLeft: 30,
// //   },
// // });
