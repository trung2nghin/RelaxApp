import React from 'react';
import {
  StyleSheet,
  ImageSourcePropType,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text, View} from 'react-native-ui-lib';

interface Props {
  title: string;
  source: ImageSourcePropType;
  onPress(): undefined;
}

const IconList = ({title, source, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={{width: 177, height: 122}} source={source} />
      </TouchableOpacity>
      <Text style={styles.txtTitle} color="white">
        {title}
      </Text>
    </View>
  );
};

export default IconList;

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    alignItems: 'center',
  },
  txtTitle: {
    // marginTop: 16,
    marginBottom: 6,
  },
});
