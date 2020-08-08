import React from 'react';
import {View, Text, Button} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const StackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: 'Home Screen',
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button')}
            title="Info Not"
            color="#ff4800"
          />
        ),
      }}
    />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);

export const TabNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'black',
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({color}) => <Icon name="home" size={30} color={color} />,
      }}
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({color}) => <Icon name="gear" size={30} color={color} />,
      }}
      name="Settings"
      component={SettingsScreen}
    />
    {true ? (
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon name="user" size={30} color={color} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    ) : null}
  </Tab.Navigator>
);

export const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName="Home">
    {/* <Drawer.Screen name="Home" component={tabNav} /> */}
    <Drawer.Screen name="Home" component={TabNavigation} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />

    <Drawer.Screen name="Stack Nav" component={StackNavigation} />
  </Drawer.Navigator>
);
