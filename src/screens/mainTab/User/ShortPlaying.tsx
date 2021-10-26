import React from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootState} from '../../../reduxs/store';
import Txt from '../../../components/Txt';
import {RootStackParamList} from '../../../nav/RootStack';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import TextTicker from 'react-native-text-ticker';

const width = Dimensions.get('window').width;

const ShortPlaying = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const goPlaying = React.useCallback(() => {
    navigate('Music', {listSong: []});
  }, []);

  const isThemeLight = useSelector<RootState, boolean>(
    state => state.theme.isThemeLight,
  );
  const isPlaying = useSelector<RootState, boolean>(
    state => state.status.isPlaying,
  );

  const currentSong = useSelector<RootState, string>(
    state => state.status.currentSong,
  );
  const currentArtist = useSelector<RootState, string>(
    state => state.status.currentArtist,
  );
  const currentArtwork = useSelector<RootState, string>(
    state => state.status.currentArtwork,
  );

  const tranX = React.useRef(new Animated.Value(width)).current;
  const tranY = React.useRef(new Animated.Value(150)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isPlaying) {
      Animated.timing(tranX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(tranY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(tranX, {
        toValue: width,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(tranY, {
        toValue: 150,
        duration: 300,
        useNativeDriver: true,
      }).start();
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isPlaying]);

  return (
    <Animated.View
      style={{
        position: isPlaying ? 'relative' : 'absolute',
        width: width - 20,
        height: 65,
        backgroundColor: isThemeLight ? '#FFF' : '#292929',
        bottom: 15,
        left: 10,
        right: 10,
        borderRadius: 20,
        ...styles.shadow,
        flexDirection: 'row',
        padding: 8,
        opacity,
        transform: [{translateX: tranX}, {translateY: tranY}],
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.Image
          source={{uri: `${currentArtwork}`}}
          style={styles.img}
        />
        <View
          style={{
            position: 'absolute',
            width: 15,
            height: 15,
            borderRadius: 50,
            backgroundColor: 'rgba(0,0,0,1)',
          }}></View>
        <View
          style={{
            position: 'absolute',
            width: 7,
            height: 7,
            borderRadius: 50,
            backgroundColor: 'gray',
          }}></View>
        <View
          style={{
            position: 'absolute',
            width: 3,
            height: 3,
            borderRadius: 50,
            backgroundColor: 'rgba(0,0,0,1)',
          }}></View>
      </View>
      <View style={{width: width * 0.55}}>
        <TouchableOpacity onPress={goPlaying}>
          <View
            style={{
              width: width * 0.5,
              height: 50,
              marginLeft: 16,
              // backgroundColor: 'red',
            }}>
            <Txt m24>{currentSong}</Txt>
            <TextTicker
            style={{color: isThemeLight?"#000" : "#fff"}}
              duration={10000}
              loop
              bounce
              repeatSpacer={50}
              marqueeDelay={1000}>
              {currentArtist}
            </TextTicker>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity>
          <Ionicons
            name="play-skip-back"
            size={24}
            color={isThemeLight ? Colors.textColor : Colors.bgColor1}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name={'ios-pause'}
            size={35}
            color={
              isThemeLight ? Colors.textColor : Colors.bgColor1
            }></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="play-skip-forward"
            size={24}
            color={isThemeLight ? Colors.textColor : Colors.bgColor1}
          />
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={goPlaying}>
        <View
          style={{
            width: 310,
            height: 50,
            marginLeft: 16,
            // backgroundColor: '#FFF',
          }}>
          <Txt m24>{currentSong}</Txt>
          <Txt>{currentSong}</Txt>
        </View>
      </TouchableOpacity> */}
    </Animated.View>
  );
};
export default ShortPlaying;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'rgba(0,0,0,0.3)',
    borderWidth: 1,
  },
  shadow: {
    shadowColor: 'rgb(90, 108, 234)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
