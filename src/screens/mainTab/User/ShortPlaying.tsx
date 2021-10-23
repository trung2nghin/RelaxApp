import React from 'react';
import {StyleSheet, View, Button, Animated, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../reduxs/store';
const width = Dimensions.get('window').width;
const ShortPlaying = ({}) => {
  const isPlaying = useSelector<RootState, boolean>(
    state => state.status.isPlaying,
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
        width: '100%',
        height: isPlaying ? 70 : 0,
        backgroundColor: 'blue',
        bottom: 0,
        flexDirection: 'row',
        padding: 8,
        opacity,
        transform: [{translateX: tranX}, {translateY: tranY}],
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'pink',
        }}
      />
      <View
        style={{
          // flex: 1,
          width: 310,
          height: 50,
          marginLeft: 16,
          backgroundColor: 'pink',
        }}></View>
    </Animated.View>
  );
};
export default ShortPlaying;

const styles = StyleSheet.create({});
