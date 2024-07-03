import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ItemList from '../components/ItemList';
import { fetchItems } from '../services/apis';
import { useSelector, useDispatch } from 'react-redux';
import { fetchItemsAction } from '../redux/actions/itemActions';

const HomeScreen = ({ navigation }) => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const fetchedItems = await fetchItems();
      dispatch(fetchItemsAction(fetchedItems))
    } catch (error) {
      console.error("Fetch Error", error)
    }
  };

  const handleItemPress = (item) => {
    navigation.navigate('Detail', { item });
  };

  return (
    <View style={styles.container}>
      <ItemList items={items} onItemPress={handleItemPress} />
      <Button
        title="Create New Item"
        onPress={() => navigation.navigate('Create')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;