import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntdesignIcons from 'react-native-vector-icons/AntDesign';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

const PostComponent = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.userLogoContainer}>
          <Image
            style={styles.userIcon}
            source={{
              uri: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
            }}
          />
          <Text style={styles.userName}> User Name</Text>
        </View>
        <View style={styles.headerAction}>
          <EntypoIcons name="dots-three-vertical" color="#000" size={20} />
        </View>
      </View>
      <View style={styles.contentCointainer}>
        <Image
          style={styles.content}
          source={{
            // uri: 'https://randomuser.me/api/portraits/men/75.jpg',
            uri: 'https://image.shutterstock.com/image-photo/pair-dogs-one-black-white-600w-785206939.jpg',
          }}
        />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.postAction}>
          <AntdesignIcons name="hearto" color="#000" size={24} />
          <IoniconsIcons name="md-chatbubble-outline" color="#000" size={24} />
          <IoniconsIcons name="paper-plane-outline" color="#000" size={25} />
        </View>
        <View style={styles.userAction}>
          <IoniconsIcons name="ios-pricetag-outline" color="#000" size={25} />
        </View>
      </View>
      <View style={styles.likeContainer}>
        <Text style={styles.likeText}>256 likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.likeText}>
            User Name
            <Text style={styles.caption}>
              {' '}
              Do consectetur eiusmod commodo deserunt aute.{' '}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostComponent;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    // alignItems: 'center',
    flex: 1,
    minHeight: 100,
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  userLogoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAction: {},
  contentCointainer: {
    minHeight: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    minHeight: 180,
    width: windowWidth,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  postAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 130,
  },
  userIcon: {
    height: 35,
    width: 35,
    borderRadius: 150,
  },
  userName: {
    fontWeight: '700',
    color: '#000',
    fontSize: 14,
    marginLeft: 4,
  },
  likeContainer: {
    display: 'flex',
    left: 10,
    paddingHorizontal: 5,
  },
  likeText: {
    fontWeight: '700',
    color: '#000',
    fontSize: 14,
  },
  captionContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // flexWrap: 'wrap',
    // flex: 1,
  },
  caption: {
    fontWeight: 'normal',
    flexWrap: 'wrap',
  },
  userAction: {},
});
