import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.userImageContainer}>
          <Image
            style={styles.userImage}
            source={{
              uri: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
            }}
          />
          <Text style={styles.userName}>user name</Text>
        </View>
        <View style={styles.userInfoContaienr}>
          <View style={styles.info}>
            <Text style={styles.count}>1</Text>
            <Text style={styles.countText}>posts</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.count}>12</Text>
            <Text style={styles.countText}>followers</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.count}>18</Text>
            <Text style={styles.countText}>followings</Text>
          </View>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}> Edit Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userActionButtonContainer}>
          <FontAwesomeIcons
            style={{ transform: [{ rotateY: '180deg' }] }}
            name="user-plus"
            size={17}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  content: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  userImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoContaienr: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 18,
  },
  userImage: {
    height: 85,
    width: 85,
    borderRadius: 150,
    // marginHorizontal: 5,
  },
  userName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'capitalize',
    marginTop: 5,
  },
  info: {
    alignItems: 'center',
  },
  count: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  countText: {
    fontSize: 15,
    fontWeight: '466666600',
    color: '#000',
    textTransform: 'capitalize',
  },
  actionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    paddingVertical: 5,
    // paddingHorizontal: 10,
  },
  userActionButtonContainer: {
    marginLeft: 4,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  userActionButton: {
    transform: [{ rotateY: '180deg' }],
  },
});
