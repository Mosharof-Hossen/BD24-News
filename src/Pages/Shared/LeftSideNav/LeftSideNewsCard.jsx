
import moment from 'moment';
import PropTypes from 'prop-types';
import { FaCalendarDays } from 'react-icons/fa6';

const LeftSideNewsCard = ({ news }) => {
    const { image_url, title } = news;

    return (
        <div className="card  w-full rounded">
            <figure>
                <img
                    src={image_url}
                    alt="News Image" />
            </figure>
            <div className="space-y-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <div className='flex space-x-4 '>
                    <p className='font-semibold'>Sports </p>
                    <p className='text-gray-500'>
                        <span className='flex gap-3 items-center'><FaCalendarDays></FaCalendarDays>{moment().format("MMM D, YYYY")}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

LeftSideNewsCard.propTypes = {
    news: PropTypes.object.isRequired
};

export default LeftSideNewsCard;