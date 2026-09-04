import axios from "axios";

const API_URL = "https://dummyjson.com";



const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});





export const getMethod = async (endpoint: string) => { 
  const response = await api.get(endpoint);  
  const data = await response.data;
  return  data;
};

export const postMethod = async (endpoint: string, payload: any) => { 
  // try {
  //   // Performs a GET request to https://example.com
  //   const response = await api.get("/users");
  //   setData(response.data); // Axios maps the parsed JSON directly to response.data
  // } catch (error) {
  //   console.error("API Error:", error.message);
  // } finally {
  //   setLoading(false);
  // }
  const response = await api.post(endpoint, payload);   
  const data = await response.data;
  return  data;
};
 

