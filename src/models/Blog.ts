import type {User} from "./User";

export type BlogCategory =
    | "Frontend"
    | "Backend"
    | "Fullstack"
    | "Design"
    | "Blockchain";

export interface Blog {
    id: number;
    title: string;
    slug: string;
    content: string;
    author: User | null;
    created_at: string;
    updated_at: string;
    published_at?: string | null | undefined;
    is_draft: boolean;
    category?: BlogCategory | null;
    featured_image?: string | null;
}


export interface BlogPaginatedResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Blog[];
}