import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ButtonUpdateTheme from './ButtonUpdateTheme';
import {Image, Text, View} from 'react-native-ui-lib';
import Container from '../../../components/Container';
import Txt from '../../../components/Txt';
import {ISong} from '../../../data/itemSong';
import urls from '../../../config/Api';
import {NavigationProp, useNavigation} from '@react-navigation/core';
import {RootStackParamList} from '../../../nav/RootStack';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const User = () => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<ISong[]>([]);

  const goPlaying = React.useCallback(() => {
    navigate('Music', {listSong: data});
  }, [data]);

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
  return (
    <Container>
      <View style={{width: 70, height: 100}}>
        <ButtonUpdateTheme />
      </View>
      <ScrollView>
        <View flex>
          <Image
            style={styles.image}
            source={require('../../../assets/jane.png')}
          />
          <View>
            <Txt b24 style={{alignSelf: 'center', marginTop: 24}}>
              Jane
            </Txt>
            <Txt b20 style={{alignSelf: 'center', marginTop: 16}}>
              SAN FRANCISCO, CA
            </Txt>
          </View>
          <View flex>
            <Txt b18 style={{marginTop: 16, marginLeft: 12}}>
              Recently Played 🎧
            </Txt>

            <FlatList
              style={{marginTop: 16}}
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
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
                      {item.duration}
                    </Txt>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View flex>
            <Txt b18 style={{marginTop: 16, marginLeft: 12}}>
              Favourite ❤
            </Txt>

            <FlatList
              style={{marginTop: 16}}
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
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
                      {item.duration}
                    </Txt>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
      <ButtonUpdateTheme />
    </Container>
  );
};

export default User;

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 16,
  },
});
