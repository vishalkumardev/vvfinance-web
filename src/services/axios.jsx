import {  useMemo } from "react";
import axios from "axios";
import { constant } from "../app/config/constant";
import { Showtoast } from "../common/hooks/useToast";

const useAxios = () => {
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: constant.baseUrl,
    });

    // Request Interceptor
    instance.interceptors.request.use(
      (config) => {
        const userToken = localStorage.getItem("userToken");
        if (userToken) {
          config.headers["Authorization"] = `Bearer ${userToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    instance.interceptors.response.use(
      (response) => {
        return {
          data: response?.data?.data,
          success: response?.data?.success,
          message: getMessage(response?.data?.message),
        };
      },
      (error) => {
        Showtoast(
          "error",
          getMessage(
            error?.response?.data?.message ?? error?.response?.data?.errors
          )
        );

        return {
          data: error?.response?.data?.data,
          success: error?.response?.data?.success,
          message: getMessage(
            error?.response?.data?.message ?? error?.response?.data?.errors
          ),
        };
      }
    );

    return instance;
  }, []); // Memoize the instance to avoid recreating it on each render

  const getMessage = (messages) => {
    let message = "";
    if (typeof messages === "string") {
      message = messages;
    } else if (messages?.errors) {
      const keys = Object.keys(messages.errors);
      message = messages.errors[keys[0]]?.[0] ?? "";
    }
    return message;
  };

  // Axios methods
  const get = async (url, params) => axiosInstance.get(url, { params });
  const post = async (url, data) => axiosInstance.post(url, data);
  const put = async (url, data) => axiosInstance.put(url, data);
  const del = async (url) => axiosInstance.delete(url);
  const patch = async (url, data) => axiosInstance.patch(url, data);

  return { get, post, put, delete: del, patch };
};

export default useAxios;
