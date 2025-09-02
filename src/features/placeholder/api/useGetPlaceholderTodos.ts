import { useAxiosInstance } from "@libs/axios";
import { useQuery } from "react-query";
import { PlaceholderTodo } from "./types";

export const useGetPlaceholderTodos = () => {
  const axiosInstance = useAxiosInstance();

  const queryFn = async () => {
    const response = await axiosInstance.get<PlaceholderTodo[]>("/todos");
    return response.data;
  };

  const { data, isLoading } = useQuery({ queryFn });

  return { todos: data, isLoading };
};
