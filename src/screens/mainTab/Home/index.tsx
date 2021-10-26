import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import Container from '../../../components/Container';
import Txt from '../../../components/Txt';
import ShortPlaying from '../User/ShortPlaying';
import {RootState} from '../../../reduxs/store';
import {useSelector} from 'react-redux';

const data = [
  {
    id: '0',
    src: require('../../../assets/Focus.png'),
    title: 'MEDITATION',
    time: '10 MIN',
  },
  {
    id: '1',
    src: require('../../../assets/Hapiness.png'),
    title: 'MEDITATION',
    time: '10 MIN',
  },
  {
    id: '2',
    src: require('../../../assets/Focus.png'),
    title: 'MEDITATION',
    time: '10 MIN',
  },
  {
    id: '3',
    src: require('../../../assets/Hapiness.png'),
    title: 'MEDITATION',
    time: '10 MIN',
  },
];

const Home = () => {
  const isThemeLight = useSelector<RootState, boolean>(
    state => state.theme.isThemeLight,
  );
  return (
    <Container>
      <ScrollView>
        <View marginL-16 marginT-30>
          <Txt b30>Good Morning</Txt>
          <Txt l20>We wish you have a good day</Txt>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 11,
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <TouchableOpacity>
            <Image source={require('../../../assets/Basics.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../../assets/Relaxation.png')} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderRadius: 10,
            backgroundColor: isThemeLight ? '#E5E5E5' : '#17151f',
            borderWidth: isThemeLight ? 1 : 0,
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
          <View style={{marginHorizontal: 11, marginTop: 16}}>
            <TouchableOpacity>
              <Image source={require('../../../assets/Daily.png')} />
            </TouchableOpacity>
          </View>

          <Txt black b24 marginH-12 marginT-24>
            Sleep Music
          </Txt>

          <FlatList
            horizontal
            data={data}
            keyExtractor={({id}, index) => id}
            style={{marginTop: 16}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{padding: 12}}>
                <TouchableOpacity>
                  <Image source={item.src} />
                  <Text color="#A1A4B2" marginT-5 center>
                    {item.title} 
                  </Text>
                  <Text color="#A1A4B2" center>
                   {item.time}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={{height: 20}}></View>

        <View
          style={{
            borderRadius: 10,
            backgroundColor: isThemeLight ? '#E5E5E5' : '#17151f',
            borderWidth: isThemeLight ? 1 : 0,
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
            Meditate Music
          </Txt>

          <FlatList
            horizontal
            data={data}
            keyExtractor={({id}, index) => id}
            style={{marginTop: 16}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{padding: 12}}>
                <TouchableOpacity>
                  <Image source={item.src} />
                  <Text color="#A1A4B2" marginT-5 center>
                    {item.title} 
                  </Text>
                  <Text color="#A1A4B2" center>
                   {item.time}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={{height: 20}}></View>
      </ScrollView>
      <ShortPlaying />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({});
