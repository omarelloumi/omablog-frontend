import BlogCard from "@/components/cards/BlogCard.tsx";
import Spinner from "@/components/ui/Spinner.tsx";
import type {BlogPaginatedResponse} from "@/models/Blog.ts";

type Props = {
    isPending: boolean;
    blogs: BlogPaginatedResponse,
}

const BlogContainer = ({ isPending, blogs }: Props) => {
    if(isPending){
        return <Spinner />
    }

    return (
        <section className="padding-x py-6  max-container">
            <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
                Latest Posts
            </h2>

            <div className="flex items-center gap-6 justify-center flex-wrap">
                {
                    blogs.results.map((blog) => (
                        <BlogCard key={blog.id} blog={blog}/>
                    ))
                }
            </div>
        </section>
    );
};
export default BlogContainer;
