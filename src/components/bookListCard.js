import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiSolidStar } from 'react-icons/bi';
import { addBook, removeBook } from '../redux/booksSlice';
import { loadState, saveState } from '../logic/localStorage';
import Btn from './btn';

const BookListCard = ({ book, availableBook, sortReadingList }) => {
  const {
    id, cover, title, author, onReadList,
  } = book;
  const starList = [1, 2, 3, 4, 5];

  const dispatch = useDispatch();
  const [priority, setPriority] = useState(1);
  let readingList = loadState();

  useEffect(() => {
    readingList.forEach((ele) => {
      if (ele.bookId === id) setPriority(ele.priority);
    });
  }, [priority]);

  const handleAddBook = (e) => {
    const bookId = Number(e.target.id);
    dispatch(addBook(bookId));
    let readingList = loadState();
    readingList = [...readingList, { bookId, priority: 1 }];
    readingList.sort((x, y) => y.priority - x.priority);
    saveState(readingList);
  };

  const handleRemoveBook = (e) => {
    const bookId = Number(e.target.id);
    dispatch(removeBook(bookId));
    readingList = readingList.filter((item) => item.bookId !== bookId);
    saveState(readingList);
  };

  const dragStart = (e) => {
    if (availableBook) handleAddBook(e);
    else handleRemoveBook(e);
  };

  const onClickPriorityLevel = (e, index) => {
    const itemId = index < priority
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
    <article>
      <picture>
        <img
          id={id}
          draggable
          onDragStart={dragStart}
          src={cover}
          alt={title}
          className={`${onReadList && availableBook ? 'img--reserved' : ''}`}
        />
      </picture>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{author.name}</p>
      </div>
      <div className={`card-priority ${availableBook ? '' : 'priority--display'}`}>
        {
          starList.map((index) => (
            <BiSolidStar
              key={index}
              data-item={id}
              className={`${index <= priority ? 'priority--fill' : 'priority--empty'}`}
              onClick={(e) => onClickPriorityLevel(e, index)}
            />
          ))
        }
      </div>
      <Btn id={id} onReadList={onReadList} />
    </article>
  );
};

BookListCard.defaultProps = {
  sortReadingList: () => true,
};

BookListCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    onReadList: PropTypes.bool.isRequired,
  }).isRequired,
  availableBook: PropTypes.bool.isRequired,
  sortReadingList: PropTypes.func,
};

export default BookListCard;
