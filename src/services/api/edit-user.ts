import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UserDataType } from "../../components/data-list/constant";

const fetcher = async (payload: UserDataType) => {
    return await axios
    .put(`https://jsonplaceholder.typicode.com/posts/${payload.id}`, {
        userId: payload.userId,
        title: payload.title,
        body: payload.body,
    })
    .then((res) => res.data);
};

export const useEditUser = () => {
    return useMutation({mutationFn: fetcher});
};