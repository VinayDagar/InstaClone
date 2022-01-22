// In App.js in a new project

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoundationIcons from 'react-native-vector-icons/Foundation/';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './src/pages/Home';
import FeedScreen from './src/pages/Feeds';
import ActivityScreen from './src/pages/Activity';

import MainHeader from './src/components/MainHeader';
import FeedHeader from './src/components/FeedHeader';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          header: () => <></>,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <FoundationIcons name="home" size={28} color="black" />
            ),
            header: () => <MainHeader />,
          }}
        />
        <Tab.Screen
          name="Feeds"
          component={FeedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <IoniconsIcons name="search" size={28} color="black" />
            ),
            header: () => <FeedHeader />,
          }}
        />
        <Tab.Screen
          name="Reals"
          component={FeedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="play-box" size={28} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <AntDesignIcons name="hearto" size={28} color="black" />
            ),
            header: () => <MainHeader isActivity />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={FeedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <FontAwesomeIcons name="user-circle" size={28} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  tabBarContainer: {
    // backgroundColor: 'transparent',
    // backfaceVisibility: 'hidden',
  },
});
