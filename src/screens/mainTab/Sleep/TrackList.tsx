import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import {Colors, Text, View, Image} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';
import urls from '../../../config/Api';
import Container from '../../../components/Container';
import {useSelector} from 'react-redux';
import {RootState} from '../../../reduxs/store';
import Txt from '../../../components/Txt';
import ShortPlaying from '../User/ShortPlaying';

import itemSong, {ISong} from '../../../data/itemSong';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type SleepMusicScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SleepMusic'
>;

type Props = {
  navigation: SleepMusicScreenNavigationProp;
};
const width = Dimensions.get('window').width;

const SleepMusic = ({navigation}: Props) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<ISong[]>([]);
  const [isRefresh, setIsRefresh] = React.useState(false);
  const isThemeLight = useSelector<RootState, boolean>(
    state => state.theme.isThemeLight,
  );
  React.useEffect(() => {
    fetch(urls.song)
      .then(response => response.json())
      .then(songs => {
        console.log('json', songs);
        setData(songs);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onEndReached = React.useCallback(() => {
    //check het data
    // setData((prev: ISong[]) => prev.concat(data));
    // console.log('song', data);
  }, []);

  const goPlaying = React.useCallback(() => {
    navigate('Music', {listSong: data});
  }, [data]);

  return (
    <Container flex>
      {/* image */}
      <View marginL-16 marginT-30>
        <Txt b30>Sleep Music</Txt>
        <Txt l20>We wish you have a good sleep</Txt>
      </View>

      {/* related button */}
      <View flex>
        <FlatList
          style={{marginTop: 16, marginHorizontal: 16}}
          data={data}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={onEndReached}
          refreshing={isRefresh}
          renderItem={({item}) => (
            <View padding-10>
              <TouchableOpacity onPress={goPlaying}>
                <Image
                  style={{
                    width: 177,
                    height: 122,
                    borderRadius: 10,
                    borderColor: 'black',
                  }}
                  source={{uri: `${item.artwork}`}}
                />
                <Txt center b16 marginT-8>
                  {item.title}
                </Txt>
                <Txt center m14 marginT-2 textColor2>
                  {item.duration} seconds
                </Txt>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <ShortPlaying />
    </Container>
  );
};

export default SleepMusic;

const styles = StyleSheet.create({
  back: {
    width: 55,
    height: 55,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55 / 2,
    marginLeft: 20,
    position: 'absolute',
    zIndex: 1,
    marginTop: 35,
  },
  bg: {
    alignSelf: 'center',
    position: 'absolute',
    width: width,
    height: (width / 414) * 290,
    resizeMode: 'cover',
  },
  viewbtn: {alignItems: 'center', marginBottom: 16},
  playbtn: {
    backgroundColor: '#8E97FD',
    width: 350,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
