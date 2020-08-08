import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../Styles';
import RefButton from '../../RefButton';
import {GoToScreen} from './GoToAnyScreen';
import AsyncStorage from '@react-native-community/async-storage';

export default HomeScreen = ({navigation}) => {
  saveDataToAsyncStorage = async () => {
    let user = {
      name: 'Bilal Ahmad',
      email: 'pro123908@gmail.com',
    };

    let token = 'hf2b4k424bs9d9';
    try {
      await AsyncStorage.multiSet([
        ['user_data', JSON.stringify(user)],
        ['token', token],
      ]);
      // await AsyncStorage.setItem('user_data', JSON.stringify(user));
      alert('Saved');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <View style={styles.container}>
        <Text style={styles.titleStyles}>This is the Title changed</Text>
        <Text style={styles.paraStyles}>
          This is the bit lengthier text to show a paragraph length text on the
          device just to make things simple to look
        </Text>
        <Button
          onPress={() => navigation.navigate('Settings')}
          title="Go to Setting"
        />
        <Button
          onPress={() => navigation.navigate('Profile')}
          title="Go to Profile"
        />
        <GoToScreen screenName="Profile" />
        <RefButton />

        <Button title="Save Data" onPress={saveDataToAsyncStorage} />
      </View>
    </View>
  );
};
