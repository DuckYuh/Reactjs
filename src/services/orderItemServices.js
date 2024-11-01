import axios from '../customizeAxios';

const getOrderItemList = () => {
    return axios.get('/api/orderItems/get');
}

const getOrderItemByID = (orderItemID) => {
    return axios.get('/api/orderItems/get/:orderItemID' ,{orderItemID});
}

const createOrderItem = ({ orderItemID, orderID, itemID, quantity, price }) => {
    return axios.post(`/api/orderItems/post`, { orderItemID, orderID, itemID, quantity, price });
}

const updateOrderItem = ({ orderItemID, orderID, itemID, quantity, price }) => {
    return axios.put(`/api/orderItems/put/:orderItemID`, { orderItemID, orderID, itemID, quantity, price });
}

const deleteOrderItem = (orderItemID) => {
    return axios.delete(`/api/orderItems/delete/:orderItemID`, { orderItemID });
}

export { getOrderItemList, getOrderItemByID, createOrderItem, updateOrderItem, deleteOrderItem};