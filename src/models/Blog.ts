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
    published_at?: string | null;
    is_draft: boolean;
    category?: BlogCategory | null;
    featured_image?: string | null;
}