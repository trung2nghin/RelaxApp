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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from '../../../components/Container';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reduxs/store';

// @ts-ignore
import playlistData from '../../../data/itemSong';
import {RootStackParamList} from '../../../nav/RootStack';
import Txt from '../../../components/Txt';
import { onUpdatestatus } from '../../../reduxs/statusSlice';
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


const Music = ({navigation}: Props) => {
  const playbackState = usePlaybackState();
  const progress = useProgress();
  const [repeatMode, setRepeatMode] = useState('off');
  const [trackArtwork, setTrackArtwork] = useState<string | number>();
  const [trackTitle, setTrackTitle] = useState<string>();
  const [trackArtist, setTrackArtist] = useState<string>();

  const dispatch = useDispatch();
  const isPlaying = useSelector<RootState, boolean>(
    state => state.status.isPlaying,
  );
  const viewPlaying = () => { 
    dispatch(
      dispatch(
        onUpdatestatus({
          isPlaying: !isPlaying,
        }),
      ),
    );
  };

  const funcCombined = () => {
    viewPlaying();
    togglePlayback(playbackState)
  }

  const isThemeLight = useSelector<RootState, boolean>(
    state => state.theme.isThemeLight,
  );

  const repeatIcon = () => {
    if (repeatMode == 'off') {
      return 'repeat-off';
    }
    if (repeatMode == 'track') {
      return 'repeat-once';
    }
    if (repeatMode == 'repeat') {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode == 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }
    if (repeatMode == 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }
    if (repeatMode == 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
      setRepeatMode('off');
    }
  };

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

  return (
    <Container style={styles.screenContainer}>
      <View row marginT-35>
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name="arrow-down"
            size={28}
            color={isThemeLight ? Colors.textColor : Colors.bgColor1}
          />
        </TouchableOpacity>
        <View flex row right>
          <TouchableOpacity style={styles.like}>
            <Ionicons
              name="heart"
              size={28}
              color={isThemeLight ? Colors.textColor : Colors.bgColor1}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.download} onPress={changeRepeatMode}>
            <MaterialCommunityIcons
              name={`${repeatIcon()}`}
              size={28}
              color={
                repeatMode !== 'off'
                  ? Colors.primary
                  : isThemeLight
                  ? Colors.textColor
                  : Colors.bgColor1
              }
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Image style={styles.artwork} source={{uri: `${trackArtwork}`}} />
        <Txt b34 textColor marginB-10>
          {trackTitle}
        </Txt>
        <Text m14 textColor7>
          {trackArtist}
        </Text>
        <Slider
          style={styles.progressContainer}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#8E97FD"
          minimumTrackTintColor="#7583CA"
          maximumTrackTintColor={
            isThemeLight ? Colors.textColor : Colors.bgColor1
          }
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <View style={styles.progressLabelContainer}>
          <Txt style={styles.progressLabelText}>
            {new Date(progress.position * 1000).toISOString().substr(14, 5)}
          </Txt>
          <Txt style={styles.progressLabelText}>
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .substr(14, 5)}
          </Txt>
        </View>
      </View>

      <View style={styles.actionRowContainer}>
        <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
          {/* <Image assetGroup="playicons" assetName="back15" /> */}
          <Ionicons
            name="play-skip-back"
            size={35}
            color={isThemeLight ? Colors.textColor : Colors.bgColor1}
          />
        </TouchableOpacity>

        {/* pause play */}
        <TouchableOpacity onPress={() => funcCombined() }>
          <Ionicons
            name={
              playbackState === State.Playing
                ? 'ios-pause-circle-outline'
                : 'ios-play-circle-outline'
            }
            size={90}
            color={
              isThemeLight ? Colors.textColor : Colors.bgColor1
            }></Ionicons>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
          <Ionicons
            name="play-skip-forward"
            size={35}
            color={isThemeLight ? Colors.textColor : Colors.bgColor1}
          />
        </TouchableOpacity>
      </View>
    </Container>
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
    alignItems: 'center',
  },
  close: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2,
    marginLeft: 20,
  },
  like: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2,
    marginRight: 10,
  },
  download: {
    width: 55,
    height: 55,
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
  },
  progressLabelText: {
    fontVariant: ['tabular-nums'],
  },
  actionRowContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
    justifyContent: 'space-between',
  },
});

export default Music;
