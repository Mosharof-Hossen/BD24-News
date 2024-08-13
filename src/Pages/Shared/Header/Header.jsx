import moment from 'moment';

const Header = () => {
    return (
        <div className=" text-center space-y-3 my-6">
            <h1 className="text-6xl font-pacifico">The BD-24 News </h1>
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;