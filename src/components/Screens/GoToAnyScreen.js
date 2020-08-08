import React from 'react';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const GoToScreen = ({screenName}) => {
  const navigation = useNavigation();
  return (
    <Button
      title={`Go to ${screenName} through any screen`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
};
