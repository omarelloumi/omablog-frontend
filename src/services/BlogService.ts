import api from "@/api.ts";
import axios from "axios";

export async function getBlogs(page:string | number) {
    try {
        const response = await api.get("show_blogs?page="+page);
        return response.data;
    } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
        throw new Error(err.response?.data?.message ?? err.message);
        }
        if (err instanceof Error) {
            throw err;
        }
        throw new Error("Unexpected error while fetching blogs");
    }
}