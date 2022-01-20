import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StoryCarosule from '../../components/StoryCarosule';

const Home = () => {
  return (
    <View>
      <StoryCarosule />
      <Text style={styles.text}>This is the Home Screen</Text>
    </View>
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
    marginTop: 14,
  },
});
