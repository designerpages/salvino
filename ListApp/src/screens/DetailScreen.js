import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { deleteItem } from '../services/apis';
import { useDispatch } from 'react-redux';
import { deleteItemAction } from '../redux/actions/itemActions'

const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const dispatch = useDispatch()

  const handleDelete = async () => {
    try {
      await deleteItem(item.id);
      dispatch(deleteItemAction(item.id))
      navigation.goBack();
    } catch (error) {
      console.error("Item Delete Error", error)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title: {item.title}</Text>
      <Text style={styles.text}>Description: {item.description}</Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('Edit', { item })}
      />
      <View style={styles.button}>
        <Button title="Delete" onPress={handleDelete} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    marginBottom: 10,
  },
  button: {
    marginTop:10,
  }
});

export default DetailScreen;