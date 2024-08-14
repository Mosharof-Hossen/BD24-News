import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, seCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => seCategories(data))
    }, [])
    console.log(categories);
    return (
        <div className="font-poppins p-4">
            <h3 className="text-xl font-bold mb-4">All Category</h3>
            <div className="space-y-2">
                <button className="btn border rounded w-full"> National News</button>
            </div>

            <div className="space-y-3 p-3">
                {
                    categories?.map((category) => {
                        return <Link className="block text-[#9F9F9F]" to={`/category/${category.id}`} key={category.id}>{category.name}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default LeftSideNav;