import useAxios from "../../services/axios";

const useApi = () => {
  const { get, post, put, delete: del, patch } = useAxios();

  const getApi = async (url) => {
    // setLoading(true);
    const response = await get(url);
    // setLoading(false);
    return response.data;
  };

  const postApi = async (url, data) => {
    // setLoading(true);
    const response = await post(url, data);
    // setLoading(false);
    return response;
  };

  const putApi = async (url, data) => {
    // setLoading(true);
    const response = await put(url, data);
    // setLoading(false);
    return response;
  };

  const patchApi = async (url, data) => {
    // setLoading(true);
    const response = await patch(url, data);
    // setLoading(false);
    return response;
  };

  const deleteApi = async (url) => {
    // setLoading(true);
    const response = await del(url);
    // setLoading(false);
    return response;
  };

  return { getApi, postApi, putApi, deleteApi, patchApi }; // Export post method as part of the returned object
};

export default useApi;
