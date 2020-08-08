import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../Styles';

export default ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>

      <View style={styles.container}>
        <Text style={styles.titleStyles}>This is the Title changed</Text>
        <Text style={styles.paraStyles}>
          This is the bit lengthier text to show a paragraph length text on the
          device just to make things simple to look
        </Text>
        <Button
          style={styles.btnStyle}
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};
