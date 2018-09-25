import Api from "./index";

module.exports = {
    // Authentication
    getLoginApi: (data = {}) => Api.post({url:'/login', data}),
    checkAuthApi: (data = {}) => Api.get({url:'/auth', data}),

    // User CRUD
    getUsersApi: (data = {}) => Api.get({url:'/users', data}),
    getUserApi: (data = {}) => Api.get({url:`/user/${data.id}`, data}),
    editUserApi: (data = {}) => Api.put({url:'/user', data}),
    addUserApi: (data = {}) => Api.post({url:'/user', data}),
    deleteUserApi: (data = {}) => Api.delete({url:`/user/${data.id}`, data}),
};