import axios from '../customizeAxios';

const getCartItemList = () => {
    return axios.get('/api/cartItems/get');
}

const getCartItemByID = (cartItemID) => {
    return axios.get('/api/cartItems/get/:cartItemID' ,{cartItemID});
}

const createCartItem = ({ cartItemID, cartID, itemID, quantity, price }) => {
    return axios.post(`/api/cartItems/post`, { cartItemID, cartID, itemID, quantity, price });
}

const updateCartItem = ({ cartItemID, cartID, itemID, quantity, price }) => {
    return axios.put(`/api/cartItems/put/:cartItemID`, { cartItemID, cartID, itemID, quantity, price });
}

const deleteCartItem = (cartItemID) => {
    return axios.delete(`/api/cartItems/delete/:cartItemID`, { cartItemID });
}

export { getCartItemList, getCartItemByID, createCartItem, updateCartItem, deleteCartItem};