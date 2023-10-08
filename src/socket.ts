import { io } from "socket.io-client";
 
const apiUrl = process.env.API_URL;
const nodeEnv = process.env.NODE_ENV;
 console.log(nodeEnv)
//  console.log(process.env.NODE_ENV)
const URL = nodeEnv === 'development' ? 'http://localhost:5000' : 'https://scatch-book-server.onrender.com'

console.log(URL)
export const socket = io(URL);  