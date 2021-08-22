import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 1hMe7MBO16dECD7l47jPDK5wQZnEd5fF_ZJfByE-clKDasC7Hnje-90gyDQVp0Omu_mO7nx-SUPDrcnpnHKM94CmbcBUXrskVmiUzrWNGoGIxxijqeYGRkiFAswbYXYx'
    }
});
