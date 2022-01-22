import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const MainHeader = () => {
  return (
    <View style={styles.continer}>
      <IoniconsIcons name="search" size={20} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={() => {}}
        placeholderTextColor="#2F4F4F"
        underlineColorAndroid="transparent"
      />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  continer: {
    alignItems: 'center',
    height: 38,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: '#000',
    borderRadius: 10,
    shadowColor: 'transparent',
    paddingLeft: 12,
    backgroundColor: '#c1c1c1',
  },
  input: {
    marginLeft: 8,
  },
});
