import { useGetClientsQuery } from "../api/clientApi";

const useGetClients = () => {
  const { data } = useGetClientsQuery();
  return data?.data?.records?.map((value) => {
    return {
      value: value?.key,
      label: value?.name,
    };
  });
};

export { useGetClients };
