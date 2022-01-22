import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useState } from 'react';

const Activity = () => {
  const [activities] = useState([]);

  const Item = () => (
    <View style={styles.itemContainer}>
      <Image
        style={styles.itemImage}
        source={{ uri: 'https://randomuser.me/api/portraits/men/75.jpg' }}
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemText}>
          {' '}
          Tempor nulla quis ex ullamco magna adipisicing fugiat elit magna
          aliquip qui qui.{' '}
        </Text>
      </View>
      <View>
        <Button title="Follow" onPress={() => {}} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.contetnWrapper}>
        <Text style={styles.itemLabel}> Yesterday </Text>
        <Item />
      </View>
      <View>
        <Text style={styles.itemLabel}> This Week </Text>
        <Item />
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  contetnWrapper: {
    marginVertical: 30,
  },
  itemLabel: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
  },
  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 150,
  },
  itemTextContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  itemText: {
    // flexWrap: 'wrap',
    color: '#000',
  },
});
