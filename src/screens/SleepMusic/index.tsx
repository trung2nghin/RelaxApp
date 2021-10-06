import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Colors, Text, View, Image} from 'react-native-ui-lib';
import RowList from './RowList';
import {RootStackParamList} from '../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';
import urls from '../../config/Api';
import {ISong} from '../../data/itemSong';

type SleepMusicScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SleepMusic'
>;

type Props = {
  navigation: SleepMusicScreenNavigationProp;
};
const width = Dimensions.get('window').width;

const SleepMusic = ({navigation}: Props) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<ISong[]>([]);
  const [isRefresh, setIsRefresh] = React.useState(false);

  React.useEffect(() => {
    fetch(urls.song)
      .then(response => response.json())
      .then(songs => {
        setData(songs);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const onRefresh = React.useCallback(() => {
    setIsRefresh(true);
    fetch(urls.song)
      .then(response => response.json())
      .then(songs => {
        setData(songs);
        setIsRefresh(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View backgroundColor={Colors.bgColor2} flex>
      {/* image */}
      <View flex>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image assetGroup="icons" assetName="Back" />
        </TouchableOpacity>
        <Image assetGroup="SleepMusic" assetName="header" style={styles.bg} />
      </View>

      {/* info */}
      <View height={155} width={width - 48} paddingT-20 marginL-24>
        <Text b28 color="white">
          Night Music
        </Text>
        <Text m14 textColor7 marginT-10>
          45 Min - Sleep Music
        </Text>
        <Text r18 textColor7 marginT-10>
          Ease the mind into a restful night’s sleep with {'\n'}these deep,
          amblent tones.
        </Text>
        <Text color="white" numberOfLines={1}>
          ____________________________________________________
        </Text>
      </View>

      {/* related button */}
      <View flex>
        <Text b24 color="white" marginL-24>
          Related
        </Text>
        <FlatList
          horizontal
          data={data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                onPress={() => {
                  return navigation.navigate('Music');
                }}>
                <Image
                  style={{width: 177, height: 122}}
                  source={{uri: `${item.artwork}`}}
                />
                <Text color="white">
                  {item.title} {'\n'}
                  {item.artist}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* <ScrollView>
          <RowList
            onPress={() => {
              return navigation.navigate('Music');
            }}
            title={''}
          />
        </ScrollView> */}
        <View style={styles.viewbtn}>
          <TouchableOpacity
            style={styles.playbtn}
            onPress={() => {
              navigation.navigate('Music');
            }}>
            <Text m16 textColor8>
              PLAY
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
