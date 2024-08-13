import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex rounded p-2 bg-slate-100">
            <button className="btn btn-error text-white">Breaking News</button>
            <Marquee className="mx-2" pauseOnHover="true" speed={150}>
                <Link to={"/"}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;