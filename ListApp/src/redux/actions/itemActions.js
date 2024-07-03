export const fetchItemsAction = item => ({
    type: 'FETCH_ITEM',
    payload: item
});

export const createItemAction = item => ({
    type: 'ADD_ITEM',
    payload: item
});
  
export const deleteItemAction = id => ({
    type: 'DELETE_ITEM',
    payload: id
});
  
export const EditItemAction = item => ({
    type: 'EDIT_ITEM',
    payload: item
});