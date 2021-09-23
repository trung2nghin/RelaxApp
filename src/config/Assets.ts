import {Assets} from 'react-native-ui-lib';

Assets.loadAssetsGroup('iconsTab', {
  Home: require('../assets/Home.png'),
  Moon: require('../assets/Moon.png'),
  Meditate: require('../assets/Meditate.png'),
  Music: require('../assets/Music.png'),
  User: require('../assets/User.png'),
});
Assets.loadAssetsGroup('icons', {
  x: require('../assets/x.png'),
  Heart: require('../assets/Heart.png'),
  Down: require('../assets/Down.png'),
  Back: require('../assets/Back.png')
});
Assets.loadAssetsGroup('playicons', {
  next15: require('../assets/next15.png'),
  back15: require('../assets/back15.png'),
  pause: require('../assets/pause.png'),
});
Assets.loadAssetsGroup('Onboarding', {
  Group: require('../assets/Group.png'),
  Frame: require('../assets/Frame.png'),
  moonlogo: require('../assets/moonlogo.png'),
});
Assets.loadAssetsGroup('WelcomeSleep', {
  Bird: require('../assets/Bird.png'),
  welcomesleep: require('../assets/welcomesleep.png'),
  bgsleep: require('../assets/bgsleep.png'),
  Cloud: require('../assets/Cloud.png'),
  bg: require('../assets/bg.png'),
});

Assets.loadAssetsGroup('SleepMusic', {
  header: require('../assets/header.png')
});

export default Assets;
