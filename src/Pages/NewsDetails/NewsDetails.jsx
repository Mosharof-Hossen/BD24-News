import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import LeftSideNewsCard from "../Shared/LeftSideNav/LeftSideNewsCard";


const NewsDetails = () => {
    const allNews = useLoaderData()
    const { newsId } = useParams();
    const [selectedNews, setSelectedNews] = useState();
    useEffect(() => {
        const filteredNews = allNews.find(news => news._id == newsId)
        setSelectedNews(filteredNews);
    }, [allNews, newsId])

    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3 mx-4 p-4 ">
                    <h3 className="text-xl font-bold mb-4">BD-24 News</h3>
                    <div className=" p-4 border rounded space-y-5">
                        <img src={selectedNews?.image_url} className="w-full" alt="" />
                        <h3 className="text-2xl font-bold">{selectedNews?.title}</h3>
                        <p className="text-base text-gray-500 text-justify">{selectedNews?.details}</p>
                        <Link to={"/"}><button className="btn btn-error rounded mt-8 text-white"><FaArrowLeft></FaArrowLeft> All rows in this category</button></Link>
                    </div>
                    <div className="my-10 grid gap-5 grid-cols-1 md:grid-cols-3">
                        {
                            allNews.slice(17,20).map(nws=><LeftSideNewsCard news={nws} key={nws._id}></LeftSideNewsCard>)
                        }
                    </div>
                </div>

                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;