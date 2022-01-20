import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';

const dummyUsers = [
  {
    name: {
      title: 'mr',
      first: 'brad',
      last: 'gibson',
    },
    email: 'brad.gibson@example.com',
    id: {
      name: 'PPS',
      value: '0390511T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/75.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/75.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    },
  },
  {
    name: {
      title: 'mr',
      first: 'Derrick',
      last: 'Silva',
    },
    email: 'derrick.silva@example.com',
    id: {
      name: 'lva',
      value: '0390411T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/74.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/74.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/74.jpg',
    },
  },
  {
    name: {
      title: 'mr',
      first: 'Javier',
      last: 'Gutierrez',
    },
    email: 'javier.gutierrez@example.com',
    id: {
      name: 'gotham',
      value: '0391411T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/14.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/14.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg',
    },
  },
  {
    name: {
      title: 'mrs',
      first: 'Lucy',
      last: 'Morrison',
    },
    email: 'lucy.morrison@example.com',
    id: {
      name: 'morris',
      value: '0391611T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/88.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg',
    },
  },
  {
    name: {
      title: 'mr',
      first: 'Dwight',
      last: 'Long',
    },
    email: 'dwight.long@example.com',
    id: {
      name: 'PPS',
      value: '0391512T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/53.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/53.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/53.jpg',
    },
  },
  {
    name: {
      title: 'mr',
      first: 'Klause',
      last: 'mikleson',
    },
    email: 'dwight.long@example.com',
    id: {
      name: 'mike',
      value: '0391911T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/47.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/47.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/47.jpg',
    },
  },
  {
    name: {
      title: 'mr',
      first: 'Jhon',
      last: 'doe',
    },
    email: 'dwight.long@example.com',
    id: {
      name: 'doe',
      value: '0391511T',
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/men/51.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/51.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/51.jpg',
    },
  },
];

const StoryCarosule = () => {
  const [userList] = useState(dummyUsers);

  const RenderUserStories = () => {
    return userList.map(user => (
      <View key={user.id.value} style={styles.storyContainer}>
        <Image
          source={{ uri: user.picture.large }}
          style={styles.userThumbnail}
        />
        <Text style={styles.userName}>
          {' '}
          {user.name.first} {user.id.name}{' '}
        </Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}>
        <RenderUserStories />
      </ScrollView>
    </View>
  );
};

export default StoryCarosule;

const styles = StyleSheet.create({
  container: {
    top: 3,
    height: 90,
    position: 'relative',
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  storyContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 2,
  },
  userThumbnail: {
    width: 70,
    height: 70,
    flexWrap: 'wrap',
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'orangered',
  },
  userName: {
    marginTop: 5,
    textTransform: 'lowercase',
    color: '#000',
  },
});
