import api from "@/api";
import axios from "axios";
import type {User} from "@/models/User.ts";

export async function registerUser(data: User){
    try{
        const response = await api.post("register_user/", data)
        return response.data
    }

    catch (err: unknown) {
        if (axios.isAxiosError(err)) {
            throw new Error(err.response?.data?.message ?? err.message);
        }
        if (err instanceof Error) {
            throw err;
        }
        throw new Error("Unexpected error while adding user");
    }
}