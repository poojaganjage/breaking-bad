import axios from "axios";

// Creating axios instance.
export default axios.create({
    baseURL: "https://www.breakingbadapi.com/api/"
});
