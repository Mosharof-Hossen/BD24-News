
import PropTypes from 'prop-types';
import { FaBookmark, FaShareNodes } from 'react-icons/fa6';

const MainNewsCard = ({ feedNews }) => {
    const { image_url, author } = feedNews;
    return (
        <div className='border'>
            <div className='flex justify-between items-center p-4'>
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
        </div>
    );
};

MainNewsCard.propTypes = {
    feedNews: PropTypes.object.isRequired
};

export default MainNewsCard;