import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UserDataType } from "../../components/data-list/constant";

const fetcher = async (payload: Omit<UserDataType, "id">) => {
    return await axios
    .post(`https://jsonplaceholder.typicode.com/posts`, payload)
    .then((res) => res.data);
};


export const useAddUser = () => {
    return useMutation({ mutationFn: fetcher });
};