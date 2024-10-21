import axios from '../customizeAxios';

const getUserList = () => {
    return axios.get('/api/users/get');
}

const getUserByID = (userID) => {
    return axios.get('/api/users/get/:userID' ,{userID});
}

const createUser = ({ userID, username, password }) => {
    return axios.post(`/api/users/post`, { userID, username, password });
}

const updateUser = ({ userID, username, password }) => {
    return axios.put(`/api/users/put/:userID`, { userID, username, password });
}

const deleteUser = (userID) => {
    return axios.delete(`/api/users/delete/:userID`, { userID });
}

export { getUserList, getUserByID, createUser, updateUser, deleteUser};