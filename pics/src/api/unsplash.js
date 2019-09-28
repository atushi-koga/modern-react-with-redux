import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 39918a48868eaf3273dc0475feb8e61816a80ff68a3a84a1db592762bbdfa5b7'
    }
});