import type {Blog} from "@/models/Blog.ts";

type Props = {
    blog: Blog;
};
const Badge = ({ blog }: Props) => {
    return (
        <span className="px-2 py-[3px] text-[12px] font-semibold bg-[#5D2DE6] text-[#FFFFFF] rounded-sm self-start">
            {blog.category}
        </span>
    );
};
export default Badge;
