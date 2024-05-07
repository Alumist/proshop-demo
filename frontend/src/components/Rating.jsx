import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  return (
    <div className='rating'>
      <span>
        { value } 
      </span>
    </div>
  );
};

export default Rating;
