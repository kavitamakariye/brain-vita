import axios from "axios";

export const post = (url, data) => axios({
    method: 'POST',
    url: url,
    data: data
});


