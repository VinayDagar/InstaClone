// In App.js in a new project

import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoundationIcons from 'react-native-vector-icons/Foundation/';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './src/pages/Home';
import FeedScreen from './src/pages/Feeds';

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon = options.tabBarIcon || undefined;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <FoundationIcons name="home" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Feeds"
          component={FeedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <IoniconsIcons name="search" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Reals"
          component={FeedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="play-box" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={FeedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <AntDesignIcons name="hearto" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={FeedScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <FontAwesomeIcons name="user-circle" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  tabBarContainer: {
    // backgroundColor: 'transparent',
    // backfaceVisibility: 'hidden',
  },
});
