import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Logo from '../assets/Instalogo.png';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import AntdesignIcons from 'react-native-vector-icons/AntDesign';

const MainHeader = ({ isActivity }) => {
  return (
    <View style={styles.continer}>
      {isActivity ? (
        <Text style={styles.headerText}> Activity</Text>
      ) : (
        <>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.iconContainer}>
            <FontAwesomeIcons name="plus-square-o" size={30} color="black" />
            <AntdesignIcons name="message1" size={25} color="black" />
          </View>
        </>
      )}
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  continer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    flexDirection: 'row',
    elevation: 1,
  },
  logo: {
    width: 135,
    height: 40,
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '900',
    color: '#000',
  },
});
