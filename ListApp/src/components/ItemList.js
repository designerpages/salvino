import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ItemList = ({ items, onItemPress }) => {
  const renderItem = ({ item }) => (
    (
      item ? 
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text>Title: {item.title}</Text>
      </TouchableOpacity>
      : <Text>There aren't any Items.</Text>
    )
    
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item, id) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ItemList;