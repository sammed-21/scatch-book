import { io } from "socket.io-client";
  
const nodeEnv = process.env.NODE_ENV;
 
const URL = nodeEnv === 'development' ? 'http://localhost:5000' : 'https://scatch-book-server.onrender.com'
 
export const socket = io(URL);  