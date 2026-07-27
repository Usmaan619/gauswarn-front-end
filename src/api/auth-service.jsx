// authService.js
import axios from "axios";
import { environment } from "../environment/environment";

export const contactUsAPI = async () => {
  try {
    const response = await axiosClient.get(
      `${environment?.API_BASE_URL}/users/contact`
    );
    return response.data;
  } catch (error) {
    console.error("Get User Error:", error.response?.data || error.message);
    throw error;
  }
};
