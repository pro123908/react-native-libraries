/**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';
import {navigationRef} from './RootNavigation';
import RefButton from './RefButton';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 20,
  },
  titleStyles: {
    fontFamily: 'PoppinsRegular',
    fontSize: 20,
    marginBottom: 5,
  },

  paraStyles: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    textAlign: 'justify',
  },

  btnStyle: {
    marginBottom: 10,
  },
});

function GoToScreen({screenName}) {
  const navigation = useNavigation();
  return (
    <Button
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

function HomeScreen({navigation}) {
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
          onPress={() => navigation.navigate('Setting')}
          title="Go to Setting"
        />
        <GoToScreen screenName="Profile" />
        <RefButton />
      </View>
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ProfileScreen({navigation}) {
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
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>

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
          title="Go To details again"
          onPress={() => navigation.push('Details')}
        />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const OldStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerTitle: 'Profile Screen',
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button')}
            title="Info"
            color="#ff4800"
          />
        ),
      }}
    />
    <Stack.Screen name="Setting" component={SettingsScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <View style={styles.container}>
        <Text style={styles.titleStyles}>This is the Title changed</Text>
        <Text style={styles.paraStyles}>
          This is the bit lengthier text to show a paragraph length text on the
          device just to make things simple to look
        </Text>
        <View>
          <FlatList></FlatList>
        </View>
      </View> */}
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator> */}
      {/* <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'black',
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="home" size={30} color={color} />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="gear" size={30} color={color} />
            ),
          }}
          name="Settings"
          component={SettingsScreen}
        />
        {true ? (
          <Tab.Screen
            options={{
              tabBarIcon: ({color}) => (
                <Icon name="user" size={30} color={color} />
              ),
            }}
            name="Profile"
            component={ProfileScreen}
          />
        ) : null}
      </Tab.Navigator> */}
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={tabNav} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Details" component={OldStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const tabNav = () => (
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
export default App;
