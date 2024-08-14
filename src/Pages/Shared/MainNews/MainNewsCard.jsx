
import PropTypes from 'prop-types';
import { FaBookmark, FaShareNodes } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MainNewsCard = ({ feedNews }) => {
    const { _id, image_url, author,title ,details} = feedNews;
    console.log(feedNews);
    return (
        <div className='border rounded'>
            <div className='flex justify-between items-center p-4 bg-gray-100'>
                <div className='flex items-center space-x-3'>
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                            <img src={author?.img} className='' />
                        </div>
                    </div>
                    <div className="space-y-0 text-base">
                        <p className='font-semibold'>{author?.name} </p>
                        <p className='text-gray-400'>{author.published_date && author?.published_date.split(" ")[0]}</p>
                    </div>
                </div>

                <div className='flex gap-3 '>
                    <FaBookmark></FaBookmark>
                    <FaShareNodes></FaShareNodes>
                </div>
            </div>
            <div className='p-4 space-y-4'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <img src={image_url} alt="" className='rounded-lg' />
                
                {
                    details.length > 200 ? <p>{details.slice(0,200)}... <Link to={`/news/${_id}`} className='text-blue-600 font-bold'> Read More</Link></p>:<p>{details}</p>
                }
            </div>
        </div>
    );
};

MainNewsCard.propTypes = {
    feedNews: PropTypes.object.isRequired
};

export default MainNewsCard;