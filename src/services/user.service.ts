import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { instance as axiosInstance } from "@/helpers/axios/axiosinstance";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { getBaseUrl } from "@/helpers/config/envConfig";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const getUserInfo = () => {
  try {
    const authToken = getFromLocalStorage(authKey);
    if (authToken) {
      const decodedData = decodedToken(authToken);
      return decodedData;
    } else {
      return "";
    }
  } catch (error) {
    // console.log("err", error);
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/users/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
