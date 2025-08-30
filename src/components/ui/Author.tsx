import type {Blog} from "@/models/Blog.ts";
import {BASE_URL} from "@/api.ts";
import {FormatDate} from "@/lib/utils.ts";

type Props = {
    blog: Blog;
};
const Author = ({ blog }: Props) => {
    console.log(blog)
    return (

        <div className="flex items-center gap=4 ">
            <span className="flex items-center gap-2">
            <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
                src={`${BASE_URL}${blog.author?.profile_picture}`}
                className="c rounded-full w-full h-full object-cover"
                alt="profile pic"
            />
            </div>
                <small className="text-[#97989F] text-[12px] font-semibold">
                    {blog.author?.first_name} {blog.author?.last_name}
                </small>
            </span>
                <small className="text-[#97989F] text-[12px] font-semibold ml-3">
                    {blog.published_at ? FormatDate(blog.published_at) : ""}
                </small>
        </div>
    );
};
export default Author;
