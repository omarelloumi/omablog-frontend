import Banner from "@/components/blocks/Banner.tsx";
import BlogContainer from "@/components/blocks/BlogContainer.tsx";
import {getBlogs} from "@/services/BlogService.ts";
import {useQuery} from "@tanstack/react-query";

const HomePage = () => {
    const {isPending,  data:blogs} = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs
    })

    console.log(blogs)

    return (
        <>
            <Banner />
            <BlogContainer isPending={isPending} blogs={blogs}/>
        </>
    );
};
export default HomePage;
