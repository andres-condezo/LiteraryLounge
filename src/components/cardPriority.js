import PropTypes from 'prop-types';
import { BiSolidStar } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { loadState, saveState } from '../logic/localStorage';

const CardPriority = ({ id, availableBook, sortReadingList }) => {
  const [priority, setPriority] = useState(1);
  const starList = [1, 2, 3, 4, 5];
  let readingList = loadState();

  useEffect(() => {
    readingList.forEach((ele) => {
      if (ele.bookId === id) setPriority(ele.priority);
    });
  }, [priority]);

  const onClickPriorityLevel = (e, index) => {
    const itemId =
      index < priority
        ? e.target.parentNode.getAttribute('data-item')
        : e.target.getAttribute('data-item');

    setPriority(index);
    readingList = readingList.map((ele) => {
      if (ele.bookId === Number(itemId)) return { ...ele, priority: index };
      return ele;
    });
    readingList.sort((x, y) => y.priority - x.priority);
    saveState(readingList);
    sortReadingList();
  };

  return (
    <div className={`card-priority ${availableBook ? '' : 'priority--display'}`}>
      {starList.map((index) => (
        <BiSolidStar
          key={index}
          data-item={id}
          className={`${index <= priority ? 'priority--fill' : 'priority--empty'}`}
          onClick={(e) => onClickPriorityLevel(e, index)}
        />
      ))}
    </div>
  );
};

CardPriority.propTypes = {
  id: PropTypes.number.isRequired,
  availableBook: PropTypes.bool.isRequired,
  sortReadingList: PropTypes.func.isRequired,
};

export default CardPriority;
