import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text>This is Feed Screen</Text>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
