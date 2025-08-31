import Badge from "@/components/ui/Badge.tsx";
import Author from "@/components/ui/Author.tsx";
import {Link} from "react-router-dom";
import type {Blog} from "@/models/Blog.ts";
import { BASE_URL } from "@/api";

type Props = {
    blog: Blog;
};
const BlogCard = ({ blog }: Props) => {
    return (
        <Link to={"/detail/"+blog.slug} className="px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg transition-shadow duration-300 hover:scale-105">
            <div className="w-full h-[200px] border rounded-md overflow-hidden">
                <img
                    src={`${BASE_URL}${blog.featured_image}`}
                    className="w-full h-full object-cover rounded-lg"
                    alt="thumbnail"
                />
            </div>
            <Badge category={blog.category} />
            <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
                {blog.title}
            </h3>
            <Author blog={blog}/>
        </Link>
    );
};
export default BlogCard;
