import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../Styles';
import RefButton from '../../RefButton';
import {GoToScreen} from './GoToAnyScreen';

export default HomeScreen = ({navigation}) => {
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
      </View>
    </View>
  );
};
