import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Colors, Image, View, Text, Checkbox} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../../nav/RootStack';
import {StackNavigationProp} from '@react-navigation/stack';

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

const SignUp = ({navigation}: Props) => {
  const [text, onChangeText] = React.useState('');
  const [mail, onChangeMail] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  const [isSelected, setSelection] = useState(false);
  return (
    <View flex backgroundColor={Colors.textInput}>
      {/* View 1 */}
      <View flex center>
        <View marginB-24 marginT-20>
          <Text b28>Create your Account</Text>
        </View>

        <View center marginB-14>
          <TouchableOpacity>
            <View
              width={350}
              height={55}
              backgroundColor="#7583CA"
              br100
              center
              style={{flexDirection: 'row'}}>
              <Ionicons name="logo-facebook" size={32} color={'white'} />
              <Text m14 textColor8 marginL-10>
                CONTINUE WITH FACEBOOK
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View center marginB-28>
          <TouchableOpacity>
            <View
              center
              width={350}
              height={55}
              backgroundColor={Colors.textColor3}
              br100
              style={{flexDirection: 'row'}}>
              <Ionicons
                name="logo-google"
                size={32}
                color={Colors.textColor2}
              />
              <Text m14 textColor marginL-10>
                CONTINUE WITH GOOGLE
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity>
            <Text b14 textColor2>
              OR LOGIN WITH EMAIL
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* View 2 */}
      <View flex>
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder="User name"
            onChangeText={onChangeMail}
            value={mail}
            style={{
              width: 350,
              height: 55,
              backgroundColor: Colors.bgColor1,
              marginBottom: 20,
              borderRadius: 10,
              padding: 20,
            }}></TextInput>

          <TextInput
            placeholder="Email Address"
            onChangeText={onChangeText}
            value={text}
            style={{
              width: 350,
              height: 55,
              backgroundColor: Colors.bgColor1,
              marginBottom: 20,
              borderRadius: 10,
              padding: 20,
            }}></TextInput>

          <TextInput
            placeholder="Password"
            onChangeText={onChangePass}
            value={pass}
            secureTextEntry={true}
            style={{
              width: 350,
              height: 55,
              backgroundColor: Colors.bgColor1,
              borderRadius: 10,
              padding: 20,
            }}></TextInput>
        </View>

        <View paddingT-12>
          <View row marginT-12 marginB-24 center>
            <View row>
              <Text m14 textColor2>
                I have read the{' '}
              </Text>
              <TouchableOpacity>
                <Text m14 textColor6 marginR-10>
                  Privace Policy
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Checkbox
                value={isSelected}
                onValueChange={setSelection}></Checkbox>
            </View>
          </View>

          <View center marginB-12>
            <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
              <View
                width={350}
                height={55}
                backgroundColor={Colors.primary}
                br100
                center>
                <Text m14 textColor8>
                  GET STARTED
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
