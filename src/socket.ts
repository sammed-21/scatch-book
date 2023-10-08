import { io } from "socket.io-client";
  
const nodeEnv = process.env.NODE_ENV;
 const URL = process.env.NODE_ENV === 'production'?'https://scatch-book-server.onrender.com':'http://localhost:5000'
// const URL = nodeEnv === 'development' ? 'http://localhost:5000' : 'https://scatch-book-server.onrender.com'
 console.log(URL)
export const socket = io(URL);  