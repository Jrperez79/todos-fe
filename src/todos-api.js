import request from 'superagent';

const URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
    try {
        return request.post(`${URL}/auth/signup`, userData);
    } catch(e) {
        throw { error: e.message }
    }
}

export function signIn(userData) {
    try {
        return request.post(`${URL}/auth/signin`, userData);
    } catch(e) {
        throw { error: e.message }
    }
}

export function fetchTodos() {
    const token = localStorage.getItem('token');

    try {
        return request
            .get(`${URL}/api/todos`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function fetchTodos(id) {
    const token = localStorage.getItem('token');

    try {
        return request
            .get(`${URL}/api/todos/${id}`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function createTodos(todosData) {
    const token = localStorage.getItem('token');

    try {
        return request
            .post(`${URL}/api/todos`, todosData)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function updateTodos(id, updatedTodos) {
    const token = localStorage.getItem('token');

    try {
        return request
            .put(`${URL}/api/todos/${id}`, updatedTodos)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function deleteTodos(id) {
    const token = localStorage.getItem('token');

    try {
        return request
            .delete(`${URL}/api/todos/${id}`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}


