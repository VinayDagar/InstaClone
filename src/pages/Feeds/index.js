import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, FlatList } from 'react-native';

const Feed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = Array.apply(null, Array(62)).map((v, i) => {
      return {
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1),
        isReel: false,
      };
    });
    setItems(data);
  }, []);

  const feedItemGenerator = ({ item }) => (
    <View style={styles.feed}>
      <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        numColumns={3}
        keyExtractor={(item, index) => index}
        renderItem={feedItemGenerator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  feed: {
    margin: 1,
  },
  imageThumbnail: {
    height: 120,
    width: 120,
  },
});
