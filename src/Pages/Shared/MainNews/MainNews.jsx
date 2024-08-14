import { useEffect, useState } from "react";
import MainNewsCard from "./MainNewsCard";


const MainNews = () => {

    const [feedNewsData ,setFeedNewsData] = useState([])

    useEffect(()=>{
        fetch("news.json")
        .then(res=>res.json())
        .then(data=>setFeedNewsData(data))
    },[])

    console.log(feedNewsData);
    return (
        <div className="font-poppins p-4">
            <h3 className="text-xl font-bold mb-4">News Feed</h3>
            <div>
                {
                    feedNewsData.map((news)=><MainNewsCard key={news._id} feedNews={news}></MainNewsCard>)
                }
            </div>
        </div>
    );
};

export default MainNews;