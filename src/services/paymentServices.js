import axios from '../customizeAxios';

const getPaymentList = () => {
    return axios.get('/api/payments/get');
}

const getPaymentByID = (paymentID) => {
    return axios.get('/api/payments/get/:paymentID' ,{paymentID});
}

const createPayment = ({ paymentID, payDay, payMethod, price, status }) => {
    return axios.post(`/api/payments/post`, { paymentID, payDay, payMethod, price, status });
}

const updatePayment = ({ paymentID, payDay, payMethod, price, status }) => {
    return axios.put(`/api/payments/put/:paymentID`, { paymentID, payDay, payMethod, price, status });
}

const deletePayment = (paymentID) => {
    return axios.delete(`/api/payments/delete/:paymentID`, { paymentID });
}

export { getPaymentList, getPaymentByID, createPayment, updatePayment, deletePayment};