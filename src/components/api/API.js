import axios from 'axios'

export default {
    getBooks: () => {
        return axios.get('/api/books')
    },

    getBook: (id) => {
        return axios.get(`/api/books/${id}`)
    },

    createBook: (book) => {
        return axios.post(`/api/books`, book)
    },

    updateBook: (id, book) => {
        return axios.put(`/api/books/${id}`, book)
    },

    removeBook: (id) => {
        return axios.delete(`/api/books/${id}`)
    }
}