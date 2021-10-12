import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Colors, Image, View, Text} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignIn = () => {
  const [text, onChangeText] = React.useState('');
  const [pass, onChangePass] = React.useState('');
  return (
    <View flex backgroundColor={Colors.textInput}>
      {/* View 1 */}
      <View flex center>
        <View marginB-24 marginT-20>
          <Text b28>Welcome Back!</Text>
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
        <View flex style={{alignItems: 'center'}}>
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
            style={{
              width: 350,
              height: 55,
              backgroundColor: Colors.bgColor1,
              borderRadius: 10,
              padding: 20,
            }}></TextInput>
        </View>

        <View flex>
          <View center marginB-12>
            <TouchableOpacity>
              <View
                width={350}
                height={55}
                backgroundColor={Colors.primary}
                br100
                center>
                <Text m14 textColor8>
                  LOG IN
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text marginT-12 b14 textColor>
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>

          <View flex center style={{flexDirection: 'row'}}>
            <Text m14 textColor2>
              ALREADY HAVE AN ACCOUNT?{' '}
            </Text>
            <TouchableOpacity>
              <Text m14 primary>
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
