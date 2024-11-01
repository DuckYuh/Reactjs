import axios from '../customizeAxios';

const getAdminList = () => {
    return axios.get('/api/admins/get');
}

const getAdminByID = (adminID) => {
    return axios.get('/api/admins/get/:adminID' ,{adminID});
}

const createAdmin = ({ adminID, userID }) => {
    return axios.post(`/api/admins/post`, { adminID, userID });
}

const updateAdmin = ({ adminID, userID }) => {
    return axios.put(`/api/admins/put/:adminID`, { adminID, userID });
}

const deleteAdmin = (adminID) => {
    return axios.delete(`/api/admins/delete/:adminID`, { adminID });
}

export { getAdminList, getAdminByID, createAdmin, updateAdmin, deleteAdmin};