import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {onUpdatestatus} from '../../../reduxs/statusSlice';
import {RootState} from '../../../reduxs/store';

const PlayingMusic = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector<RootState, boolean>(
    state => state.status.isPlaying,
  );
  const {goBack} = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Button
        title={!isPlaying ? 'Playing' : 'Pause'}
        onPress={() => { 
          dispatch(
            dispatch(
              onUpdatestatus({
                isPlaying: !isPlaying,
              }),
            ),
          );
        }}
      />

      <Button
        title={'goback'}
        onPress={() => {
          goBack();
        }}
      /> */}
    </View>
  );
};

export default PlayingMusic;

const styles = StyleSheet.create({});
