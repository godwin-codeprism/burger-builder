import axios from 'axios';

const httpOrders = axios.create({
    baseURL: "https://burger-builder-godwin.firebaseio.com/"
});

export default httpOrders;