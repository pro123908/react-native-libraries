import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../Styles';

export default SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>

      <View style={styles.container}>
        <Text style={styles.titleStyles}>This is the Title changed</Text>
        <Text style={styles.paraStyles}>
          This is the bit lengthier text to show a paragraph length text on the
          device just to make things simple to look
        </Text>
        <Button
          style={styles.btnStyle}
          title="Go back"
          onPress={() => navigation.goBack()}
        />
        <Button
          style={styles.btnStyle}
          title="Go To Settings Again"
          onPress={() => navigation.push('Settings')}
        />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};
