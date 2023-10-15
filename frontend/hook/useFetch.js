import { useState, useEffect } from 'react';
import axios from 'axios';

export default useFetch = ({ serverURL }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const something  = {
        userId: "insert user id here",
        image: "base64 encoded image"
    }
    const request = async (data = something) => {
        try {
            setLoading(true);
            const response = await axios.post(serverURL, data);
            setData(response.data);
            setLoading(false);
        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }
}