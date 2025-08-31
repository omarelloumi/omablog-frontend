import Badge from "@/components/ui/Badge.tsx";
import Author from "@/components/ui/Author.tsx";
import {useQuery} from "@tanstack/react-query";
import {getBlog} from "@/services/BlogService.ts";
import {useParams} from "react-router-dom";
import Spinner from "@/components/ui/Spinner";

const BlogDetail = () => {
    const { slug } = useParams();
    console.log(slug);

    const {
        isPending,
        data:article,
    } = useQuery({
        queryKey: ["blogs", slug],
        queryFn: () => getBlog(slug),
    });


    if (isPending) {
        return <Spinner />;
    }

    return (
        <div className="padding-dx max-container py-9">
            <Badge category={article.category} />

            <div className="flex justify-between items-center">
                <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
                    {article.title}
                </h2>
            </div>

            <Author blog={article} />

            <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
                <img className="w-full h-full object-cover rounded-sm" src={article.featured_image ? article.featured_image : ""}  alt={"banner"}/>
            </div>
            <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
                { article.content ? article.content : ""}
            </p>
        </div>
    );
};
export default BlogDetail;
