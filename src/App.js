import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import {
  ConfigurePushNotifications,
  NonScheduleNotification,
  ScheduleNotification,
} from './components/LocalNotifications';
import {
  StackNavigation,
  TabNavigation,
  DrawerNavigation,
} from './components/Navigators';

const App = () => {
  useEffect(() => {
    // ConfigurePushNotifications();
    // NonScheduleNotification('Title', 'Message');
    // ScheduleNotification('Title', 'Message');
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {/* {StackNavigation()} */}
      {/* {TabNavigation()} */}
      {DrawerNavigation()}
    </NavigationContainer>
  );
};

export default App;
