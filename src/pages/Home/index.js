import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    // <View>
    <Text style={styles.text}>This is the Home Screen</Text>
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
});
