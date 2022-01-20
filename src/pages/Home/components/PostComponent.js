import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PostComponent = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.userLogoContainer}>
          <Text> User Image</Text>
          <Text> User Name</Text>
        </View>
        <View style={styles.headerAction}>
          <Text> act </Text>
        </View>
      </View>
      <View style={styles.contentCointainer}>
        <Text> The Main Body </Text>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.postAction}>
          <Text> L </Text>
          <Text> C </Text>
          <Text> S </Text>
        </View>
        <View style={styles.userAction}>
          <Text> SS </Text>
        </View>
      </View>
    </View>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    minHeight: 100,
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  userLogoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerAction: {},
  contentCointainer: {
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  postAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 130,
  },
  userAction: {},
});
