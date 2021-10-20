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

const data = [
  {
    id: '0',
    src: require('../../../assets/Focus.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
  {
    id: '1',
    src: require('../../../assets/Hapiness.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
  {
    id: '2',
    src: require('../../../assets/Focus.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
  {
    id: '3',
    src: require('../../../assets/Hapiness.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
];

const Home = () => {
  return (
    // <View backgroundColor={Colors.bgColor1}>
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
                <Text color="#A1A4B2">
                  {item.title} / {item.time}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

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
                <Text color="#A1A4B2">
                  {item.title} / {item.time}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* <View height={90}></View> */}
      </ScrollView>
      <ShortPlaying />
    </Container>
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
