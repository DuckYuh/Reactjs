import axios from '../customizeAxios';

const getCustomerList = () => {
    return axios.get('/api/customers/get');
}

const getCustomerByID = (customerID) => {
    return axios.get('/api/customers/get/:customerID' ,{customerID});
}

const createCustomer = ({ customerID, userID, phone, address, email }) => {
    return axios.post(`/api/customers/post`, { customerID, userID, phone, address, email });
}

const updateCustomer = ({ customerID, userID, phone, address, email }) => {
    return axios.put(`/api/customers/put/:customerID`, { customerID, userID, phone, address, email });
}

const deleteCustomer = (customerID) => {
    return axios.delete(`/api/customers/delete/:customerID`, { customerID });
}

export { getCustomerList, getCustomerByID, createCustomer, updateCustomer, deleteCustomer};