import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Colors, Text, View, Image} from 'react-native-ui-lib';
import RowList from './RowList';
import {RootStackParamList} from '../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';

type SleepMusicScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SleepMusic'
>;

type Props = {
  navigation: SleepMusicScreenNavigationProp;
};

const width = Dimensions.get('window').width;
const SleepMusic = ({navigation}: Props) => {
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
        <ScrollView>
          <RowList title={''} />
        </ScrollView>
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
    backgroundColor: Colors.bgColor1,
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
    backgroundColor: Colors.primary,
    width: 350,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
