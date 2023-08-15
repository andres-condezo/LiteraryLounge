import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/booksSlice';
import { loadState, saveState } from '../logic/localStorage';

const Btn = ({ onReadList, id }) => {
  const dispatch = useDispatch();
  let readingList = loadState();

  const handleAddBook = (e) => {
    const bookId = Number(e.target.id);
    dispatch(addBook(bookId));
    readingList = [...readingList, bookId];
    saveState(readingList);
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
      title="titulo de prueba"
      aria-label={`${onReadList ? 'Remove' : 'Add'} book from reading list`}
      className={`btn add-btn ${onReadList ? '--reserved' : '--not-reserved'}`}
      onClick={(e) => (onReadList ? handleRemoveBook(e) : handleAddBook(e))}
    />
  );
};

Btn.propTypes = {
  onReadList: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default Btn;
