import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

type LoginUserProps = {
  email: string;
  password: string;
};

export const login = async (data: LoginUserProps): Promise<any> => {
  try {
    const response = await axios.post(
      "https://airdrop-endpoint-production.up.railway.app/api/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        error.response.data?.message ||
          `Server Error: ${error.response.status} ${error.response.statusText}`
      );
    } else if (error.request) {
      throw new Error(
        "No response from server. Possible network issue or CORS problem."
      );
    } else {
      throw new Error(`Request setup error: ${error.message}`);
    }
  }
};

export const logout = async () => {
  try {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      throw new Error("No token found in AsyncStorage.");
    }

    await axios.post(
      "https://airdrop-endpoint-production.up.railway.app/api/v1/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );
    await AsyncStorage.removeItem("token");

    await AsyncStorage.removeItem("user");
  } catch (error: any) {
    if (error.response) {
      console.error(
        `Logout failed: ${error.response.status} - ${error.response.statusText}`
      );
      throw new Error(
        error.response.data?.message || "Failed to log out. Please try again."
      );
    } else if (error.request) {
      console.error("No response from server during logout.");
      throw new Error(
        "No response from server. Possible network issue or CORS problem."
      );
    } else {
      console.error(`Request setup error during logout: ${error.message}`);
      throw new Error(`Request setup error: ${error.message}`);
    }
  }
};
