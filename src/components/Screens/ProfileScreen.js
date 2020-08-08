import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../Styles';
import AsyncStorage from '@react-native-community/async-storage';

export default ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  getDataFromAsyncStorage = async () => {
    try {
      // const user_data = await AsyncStorage.getItem('user_data');
      const user_data = await AsyncStorage.multiGet(['user_data']);

      if (user_data) {
        setUser(JSON.parse(user_data[0][1]));
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>

      <View style={styles.container}>
        <Text style={styles.titleStyles}>This is the Title changed</Text>
        <Text style={styles.paraStyles}>
          This is the bit lengthier text to show a paragraph length text on the
          device just to make things simple to look
        </Text>
        {user ? (
          <Text style={styles.paraStyles}>
            {user.name} - {user.email}
          </Text>
        ) : null}

        <Button
          style={styles.btnStyle}
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Retrieve Data" onPress={getDataFromAsyncStorage} />
      </View>
    </View>
  );
};
