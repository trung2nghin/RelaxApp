import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors, Image, Text, View} from 'react-native-ui-lib';
import RowList from './RowList';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Home = () => {
  return (
    <View flex backgroundColor={Colors.bgColor2}>
      <View>
        <Image
          assetGroup="WelcomeSleep"
          assetName="welcomesleep"
          style={styles.bg}
        />
      </View>
      <View center marginT-50>
        <Text b28 marginB-15 textColor4>
          Sleep Stories
        </Text>
        <Text m16 textColor4>
          Soothing bedtime stories to help you fall{'\n'}into a deep and natural
          sleep
        </Text>
      </View>

      <TouchableOpacity>
        <Image
          source={require('../../assets/OceanMoon.png')}
          marginH-10
          marginT-16
        />
      </TouchableOpacity>
      <View marginT-16>
        <ScrollView>
          <RowList title={''} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    alignSelf: 'center',
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'stretch',
  },
});
