import axios from 'axios';

export let nuxtAxiosMockBuilder = actions => {
    let mockActions = {...actions};
    mockActions.$axios = axios;
    mockActions.$axios.$post = axios.post;
    mockActions.$axios.$get = axios.get;
    mockActions.$axios.$put = axios.put;
    mockActions.$axios.$delete = axios.delete;

    return mockActions;
};