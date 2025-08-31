export interface User {
    id?: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    password?: string;
    bio?: string | null;
    profile_picture?: string | null;
    facebook?: string | null;
    instagram?: string | null;
    linkedin?: string | null;
    youtube?: string | null;
    twitter?: string | null;
}
