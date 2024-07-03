import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createItem } from '../services/apis';
import { useDispatch } from 'react-redux';
import { createItemAction } from '../redux/actions/itemActions';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const dispatch = useDispatch();

  const handleCreate = async () => {
    try {
      const item = {
        title,
        description
      };
      const createdItem = await createItem(item);
      dispatch(createItemAction(createdItem))
      navigation.goBack();
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Item</Text>
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
      <Button title="Create" onPress={handleCreate} />
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

export default CreateScreen;