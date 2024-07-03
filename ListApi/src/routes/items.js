const express = require('express');
const { getItems, getItem, createItem, updateItem, deleteItem } = require('../database');

const router = express.Router();

router.get('/', (req, res) => {
  res.json(getItems());
});

router.get('/:id', (req, res) => {
  const item = getItem(Number(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).send('Item not found');
  }
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (title && description) {
    const items = createItem(title, description);
    res.status(201).json(items);
  } else {
    res.status(400).send('Invalid request');
  }
});

router.put('/:id', (req, res) => {
  const { title, description } = req.body;
  const items = updateItem(Number(req.params.id), title, description);
  if (items) {
    res.json(items);
  } else {
    res.status(404).send('Item not found');
  }
});

router.delete('/:id', (req, res) => {
  const success = deleteItem(Number(req.params.id));
  if (success) {
    res.status(204).send(true);
  } else {
    res.status(404).send('Item not found');
  }
});

module.exports = router;