import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Text, View, Image} from 'react-native-ui-lib';
import Container from '../../../components/Container';
import Txt from '../../../components/Txt';
import {RootStackParamList} from '../../../nav/RootStack';

type MeditateScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Meditate'
>;

type Props = {
  navigation: MeditateScreenNavigationProp;
};

const data = [
  {
    id: '0',
    src: require('../../../assets/7Days.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
  {
    id: '1',
    src: require('../../../assets/Anxiet.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
  {
    id: '2',
    src: require('../../../assets/How_Meditate.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
  {
    id: '3',
    src: require('../../../assets/Green.png'),
    title: 'MEDITATION',
    time: '3-10 MIN',
  },
];

const Meditate = ({navigation}: Props) => {
  return (
    <Container>
      <View flex>
        <View style={{alignItems: 'center'}}>
          <Txt b28 marginT-10>
            Meditate
          </Txt>
          <Txt l16 marginT-10 style={{alignItems: 'center'}}>
            we can learn how to recognize when our minds{'\n'} are doing their
            normal everyday acrobatics.
          </Txt>
        </View>
        <TouchableOpacity style={{alignItems: 'center', marginTop: 16}}>
          <Image source={require('../../../assets/Daily_Calm.png')} />
        </TouchableOpacity>

        <FlatList
          data={data}
          keyExtractor={({id}, index) => id}
          numColumns={2}
          style={{marginTop: 16}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{padding: 12}}>
              <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Music')}>
                  <Image source={item.src} />
                </TouchableOpacity>
              </ScrollView>
            </View>
          )}
        />
      </View>
    </Container>
  );
};

export default Meditate;

const styles = StyleSheet.create({});
