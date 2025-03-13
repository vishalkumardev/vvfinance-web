import { useGetAllAgentsQuery } from "../api/userApi";

const useAgents = () => {
  const { data } = useGetAllAgentsQuery();
  return data?.data?.records?.map((value) => {
    return {
      value: value?.userId,
      label: value?.name,
    };
  });
};

export { useAgents };
