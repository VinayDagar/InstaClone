import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './components/header';

const Profile = () => {
  return (
    <View style={styles.containers}>
      <Header />
      <Text />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
