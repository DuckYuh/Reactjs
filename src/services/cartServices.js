import axios from '../customizeAxios';

const getCartList = () => {
    return axios.get('/api/carts/get');
}

const getCartByID = (cartID) => {
    return axios.get('/api/carts/get/:cartID' ,{cartID});
}

const createCart = ({ cartID, customerID, price }) => {
    return axios.post(`/api/carts/post`, { cartID, customerID, price });
}

const updateCart = ({ cartID, customerID, price }) => {
    return axios.put(`/api/carts/put/:cartID`, { cartID, customerID, price });
}

const deleteCart = (cartID) => {
    return axios.delete(`/api/carts/delete/:cartID`, { cartID });
}

export { getCartList, getCartByID, createCart, updateCart, deleteCart};