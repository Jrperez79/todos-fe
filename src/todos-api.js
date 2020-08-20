import request from 'superagent';

const URL = 'http://localhost:3000';

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
    const token = localStorage.getItem('TOKEN');

    try {
        return request
            .get(`${URL}/api/todos`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function fetchTodosItem(id) {
    const token = localStorage.getItem('TOKEN');

    try {
        return request
            .get(`${URL}/api/todos/${id}`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function createTodos(todosData) {
    const token = localStorage.getItem('TOKEN');

    try {
        return request
            .post(`${URL}/api/todos`, todosData)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function updateTodos(id, updatedTodos) {
    const token = localStorage.getItem('TOKEN');

    try {
        return request
            .put(`${URL}/api/todos/${id}`, updatedTodos)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}

export function deleteTodos(id) {
    const token = localStorage.getItem('TOKEN');

    try {
        return request
            .delete(`${URL}/api/todos/${id}`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}


