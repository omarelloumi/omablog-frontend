import BlogCard from "@/components/cards/BlogCard.tsx";

const BlogContainer = () => {
    return (
        <section className="padding-x py-6  max-container">
            <h2 className="font-semibold text-xl mb-6 dark:text-white text-center">
                Latest Posts
            </h2>

            <div className="flex items-center gap-6 justify-center flex-wrap">
                <BlogCard thumbnail={"thumbnail.png"} />
                <BlogCard thumbnail={"thumbnail.png"} />
                <BlogCard thumbnail={"thumbnail.png"} />
                <BlogCard thumbnail={"thumbnail.png"} />
                <BlogCard thumbnail={"thumbnail.png"} />
                <BlogCard thumbnail={"thumbnail.png"} />

            </div>
        </section>
    );
};
export default BlogContainer;
