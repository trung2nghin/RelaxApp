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
      <ScrollView>
        <View flex>
          <Image
            style={{width: width, height: 300}}
            source={require('../../../assets/avatar.png')}
          />
          <View style={{marginLeft: 16}}>
            <Txt b30 style={{marginTop: 20}}>
              Jake The Dog
            </Txt>
            <Txt m16>SAN FRANCISCO, CA</Txt>
          </View>
          <View
            flex
            style={{
              borderRadius: 10,
              backgroundColor: '#E5E5E5',
              borderWidth: 1,
              borderColor: '#E5E5E5',
              shadowColor: 'rgb(90, 108, 234)',
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              shadowOpacity: 0.1,
              shadowRadius: 50,
              elevation: 3,
            }}>
            <Txt black b24 marginH-12 marginT-24>
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

          <View
            flex
            style={{
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: '#E5E5E5',
              borderWidth: 1,
              borderColor: '#E5E5E5',
              shadowColor: 'rgb(90, 108, 234)',
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              shadowOpacity: 0.1,
              shadowRadius: 50,
              elevation: 3,
            }}>
            <Txt black b24 marginH-12 marginT-24>
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
        <ButtonUpdateTheme />
      </ScrollView>
    </Container>
  );
};

export default User;

const styles = StyleSheet.create({});
