import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/booksSlice';
import { setAnimated, resetAnimated } from '../redux/listBtnSlice';
import { loadState, saveState } from '../logic/localStorage';

const Btn = ({ onReadList, id }) => {
  const dispatch = useDispatch();
  let readingList = loadState();

  const handleAddBook = (e) => {
    const bookId = Number(e.target.id);
    dispatch(addBook(bookId));
    readingList = [...readingList, bookId];
    saveState(readingList);
    dispatch(setAnimated(true));
    dispatch(setAnimated(true));
    setTimeout(() => {
      dispatch(resetAnimated());
    }, 500);
  };

  const handleRemoveBook = (e) => {
    const bookId = Number(e.target.id);
    dispatch(removeBook(bookId));
    readingList = readingList.filter((item) => item !== bookId);
    saveState(readingList);
  };

  return (
    <button
      type="button"
      id={id}
      aria-label={`${onReadList ? 'Remove' : 'Add'} book`}
      className={`btn add-btn ${onReadList
        ? 'add-btn--reserved'
        : 'add-btn--not-reserved'}`}
      onClick={(e) => (onReadList ? handleRemoveBook(e) : handleAddBook(e))}
    />
  );
};

Btn.propTypes = {
  onReadList: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Btn;
