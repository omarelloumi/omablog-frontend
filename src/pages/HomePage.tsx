import Banner from "@/components/blocks/Banner.tsx";
import BlogContainer from "@/components/blocks/BlogContainer.tsx";
import {getBlogs} from "@/services/BlogService.ts";
import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {useState} from "react";
import PagePagination from "@/components/blocks/PagePagination.tsx";

const HomePage = () => {
    const [page, setPage] = useState<number>(1);
    const numOfBlogsPerPage = 1;
    const {isPending,  data:blogs} = useQuery({
        queryKey: ['blogs', page],
        queryFn: () => getBlogs(page),
        placeholderData: keepPreviousData,
    })

    const numOfPages = Math.ceil(blogs?.count / numOfBlogsPerPage);

    function handleSetPage(val:number) {
        setPage(val);
    }

    function increasePageValue() {
        setPage((curr) => curr + 1);
    }

    function decreasePageValue() {
        setPage((curr) => curr - 1);
    }


    return (
        <>
            <Banner />
            <BlogContainer isPending={isPending} blogs={blogs}/>
            <PagePagination numOfPages={numOfPages} handleSetPage={handleSetPage} page={page} decreasePageValue={decreasePageValue} increasePageValue={increasePageValue}/>
        </>
    );
};
export default HomePage;
