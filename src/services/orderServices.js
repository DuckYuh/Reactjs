import axios from '../customizeAxios';

const getOrderList = () => {
    return axios.get('/api/orders/get');
}

const getOrderByID = (orderID) => {
    return axios.get('/api/orders/get/:orderID' ,{orderID});
}

const createOrder = ({ orderID, paymentID, customerID, price, orderDay, address, status }) => {
    return axios.post(`/api/orders/post`, { orderID, paymentID, customerID, price, orderDay, address, status });
}

const updateOrder = ({ orderID, paymentID, customerID, price, orderDay, address, status }) => {
    return axios.put(`/api/orders/put/:orderID`, { orderID, paymentID, customerID, price, orderDay, address, status });
}

const deleteOrder = (orderID) => {
    return axios.delete(`/api/orders/delete/:orderID`, { orderID });
}

export { getOrderList, getOrderByID, createOrder, updateOrder, deleteOrder};