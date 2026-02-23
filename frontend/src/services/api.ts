import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const sendMessage = async (message: string) => {
  const response = await API.post("/chat", { message });
  return response.data.reply;
};