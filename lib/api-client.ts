import { create } from "axios";
import {useLogin} from '@/store/loginStore'

const API_URL = "https://dummyjson.com";



const api = create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});





 export const getMethod = async (endpoint: string) => {
   const response = await api.get(endpoint);
   const data = await response.data;
   return data;
 };



 export const postMethod = async (endpoint: string, payload: any) => {
     const response = await api.post(endpoint, payload);
     const data = await response.data;

     return data;
 
 };









 

