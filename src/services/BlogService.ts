import api from "@/api.ts";
import axios from "axios";

export async function getBlogs() {
    try {
        const response = await api.get("blog_list");
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