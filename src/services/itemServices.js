import axios from '../customizeAxios';

const getItemList = () => {
    return axios.get('/api/items/get');
}

const getItemByID = (itemID) => {
    return axios.get('/api/items/get/:itemID' ,{itemID});
}

const createItem = ({ itemID, imageID, itemname, itemDescription, itemType, price, size, quantity }) => {
    return axios.post(`/api/items/post`, { itemID, imageID, itemname, itemDescription, itemType, price, size, quantity });
}

const updateItem = ({ itemID, imageID, itemname, itemDescription, itemType, price, size, quantity }) => {
    return axios.put(`/api/items/put/:itemID`, { itemID, imageID, itemname, itemDescription, itemType, price, size, quantity });
}

const deleteItem = (itemID) => {
    return axios.delete(`/api/items/delete/:itemID`, { itemID });
}

export { getItemList, getItemByID, createItem, updateItem, deleteItem};