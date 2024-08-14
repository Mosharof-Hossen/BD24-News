
import PropTypes from 'prop-types';
import { FaBookmark, FaRegEye, FaShareNodes } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MainNewsCard = ({ feedNews }) => {
    const { _id, image_url, author, title, details, rating,total_view } = feedNews;
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
            <div className='p-4 space-y-4 text-gray-500'>
                <h3 className='text-xl font-bold text-black'>{title}</h3>
                <img src={image_url} alt="" className='rounded-lg' />

                {
                    details.length > 200 ? <p>{details.slice(0, 200)}... <Link to={`/news/${_id}`} className='text-blue-600 font-bold'> Read More</Link></p> : <p>{details}</p>
                }
            </div>

            <hr className='mx-4' />
            <div className='text-gray-500 p-4 flex justify-between'>
                <div className='flex space-x-3 '>
                    <div className="rating">
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star-2 bg-orange-400" />

                        <input type="radio" name={`rating-${_id}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name={`rating-${_id}`} className="mask mask-star-2 bg-orange-400" defaultChecked />
                    </div>
                    <p>{rating?.number}</p>
                </div>

                <div className='flex space-x-2 items-center'>
                    <FaRegEye></FaRegEye>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

MainNewsCard.propTypes = {
    feedNews: PropTypes.object.isRequired
};

export default MainNewsCard;