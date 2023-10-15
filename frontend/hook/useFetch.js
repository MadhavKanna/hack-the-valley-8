// import { useState, useEffect } from 'react';
// import axios from 'axios';

// export default useFetch = ({ photo, endpoint }) => {
//     const [data, setData] = useState("");
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const baseURL = "https://hack-the-valley-8-87a6bbeaf441.herokuapp.com/"
    
//     async function request(requestData) {
//         setIsLoading(true);
//         try {
//             const response = await axios.post(`${baseURL}/${endpoint}`, { photo });
//             if (response.status === 201) {
//                 const text = `This item is: ${JSON.stringify(response.data)}`;
//                 setData(text);
//                 setIsLoading(false);
//             } else {
//                 throw new Error("A server error has occurred");
//             }
//         } catch (error) {
//             setError(error);
//         } finally {
//             setIsLoading(false);
//         }
//     }
//     if (photo) {
//         useEffect(() => {
//             request();
//         }, []);
//     }

//     const refetch = () => {
//         setIsLoading(true);
//         request();
//     }

//     return {data, isLoading, error, refetch};
//   };