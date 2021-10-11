import {NavigationProp, useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {RootStackParamList} from '../../../nav/RootStack';
import ItemList from './ItemList';
const data = [
  {
    id: '0',
    title: 'Night Island',
    time: '45 mins',
    source: require('../../assets/blue.png'),
  },
  {
    id: '2',
    title: 'Sweet Sleep',
    time: '45 mins',
    source: require('../../assets/owl.png'),
  },
  {
    id: '2',
    title: 'Sweet Sleep',
    time: '45 mins',
    source: require('../../assets/owl.png'),
  },
  {
    id: '2',
    title: 'Sweet Sleep',
    time: '45 mins',
    source: require('../../assets/owl.png'),
  },
  {
    id: '2',
    title: 'Sweet Sleep',
    time: '45 mins',
    source: require('../../assets/owl.png'),
  },
  {
    id: '2',
    title: 'Sweet Sleep',
    time: '45 mins',
    source: require('../../assets/owl.png'),
  },
];

interface Props {
  title: string;
  onPress: () => void;
}

const RowList = ({title, onPress}: Props) => {
  const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1}}>
      <Text center>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => {
          return (
            <ItemList
              key={index}
              title={item.title}
              time={item.time}
              source={item.source}
              onPress={onPress}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default RowList;

const styles = StyleSheet.create({});
