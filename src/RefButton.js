import React from 'react';
import {View, Text, Button} from 'react-native';
import * as NavigationRef from './RootNavigation';

const RefButton = () => {
  return (
    <Button
      title="Ref to Profile"
      onPress={() => NavigationRef.navigate('Profile')}
    />
  );
};

export default RefButton;
