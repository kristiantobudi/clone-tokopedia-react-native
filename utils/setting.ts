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
