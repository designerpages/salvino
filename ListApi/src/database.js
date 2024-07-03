const Item = require('./models/item');

let items = [];
let currentId = 1;

const getItems = () => {
  return items;
};

const getItem = (id) => {
  return items.find((item) => item.id === id);
};

const createItem = (title, description) => {
  const newItem = new Item(currentId++, title, description);
  items.push(newItem);
  return items;
};

const updateItem = (id, title, description) => {
  const item = getItem(id);
  if (item) {
    item.title = title;
    item.description = description;
  }
  return items;
};

const deleteItem = (id) => {
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};