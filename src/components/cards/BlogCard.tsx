import Badge from "@/components/ui/Badge.tsx";
import Author from "@/components/ui/Author.tsx";
import {Link} from "react-router-dom";

type Props = {
    thumbnail: string;
};
const BlogCard = ({ thumbnail }: Props) => {
    return (
        <Link to={"/detail"} className="px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg transition-shadow duration-300 hover:scale-105">
            <div className="w-full h-[200px] border rounded-md overflow-hidden">
                <img
                    src={thumbnail}
                    className="w-full h-full object-cover rounded-lg"
                    alt="thumbnail"
                />
            </div>
            <Badge category={"Web Development"} />
            <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
                Build and Ecommerce Web App with Django and React
            </h3>
            <Author pic={"profile.png"}/>

        </Link>
    );
};
export default BlogCard;
