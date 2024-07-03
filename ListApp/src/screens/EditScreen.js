import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getItem, updateItem } from '../services/apis';
import { useDispatch } from 'react-redux';
import { EditItemAction } from '../redux/actions/itemActions'

const EditScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = route.params.item;

  const dispatch = useDispatch();

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    try {
      const fetchedItem = await getItem(id);
      setTitle(fetchedItem.title);
      setDescription(fetchedItem.description);
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const item = {
        title,
        description
      };
      const updatedItems = await updateItem(id, item);
      dispatch(EditItemAction(updatedItems));
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    itemTitle: {
        fontSize: 18,
    },
});

export default EditScreen;