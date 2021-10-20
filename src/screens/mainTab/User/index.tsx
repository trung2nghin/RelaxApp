import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ButtonUpdateTheme from './ButtonUpdateTheme';
import Container from '../../../components/Container';
import Txt from '../../../components/Txt';

const User = () => {
  return (
    <Container>
      <ButtonUpdateTheme />
    </Container>
  );
};

export default User;

const styles = StyleSheet.create({});




// import {NavigationProp, useNavigation} from '@react-navigation/core';
// import React from 'react';
// import {StyleSheet, View, Button, Animated, Dimensions} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {RootStackParamList} from '../../../nav/RootStack';
// import {onUpdatestatus} from '../../../reduxs/statusSlice';
// import {RootState} from '../../../reduxs/store';
// import ShortPlaying from './ShortPlaying';

// const ListMusic = () => {
//   const dispatch = useDispatch();
//   const isPlaying = useSelector<RootState, boolean>(
//     state => state.status.isPlaying,
//   );
//   const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
//   return (
//     <View style={{flex: 1, backgroundColor: 'pink'}}>
//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <Button
//           title="Go to Playing"
//           onPress={() => {
//             navigate('PlayingMusic');
//           }}
//         />
//         {/* <Button
//           title={!isPlaying ? 'Playing' : 'Pause'}
//           onPress={() => {
//             dispatch(
//               onUpdatestatus({
//                 isPlaying: !isPlaying,
//               }),
//             );
//           }}
//         /> */}
//       </View>

//       <ShortPlaying />
//     </View>
//   );
// };

// export default ListMusic;

// const styles = StyleSheet.create({});