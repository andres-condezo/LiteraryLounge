import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/booksSlice';
import { loadState, saveState } from '../logic/localStorage';
import { setAnimated, resetAnimated } from '../redux/listBtnSlice';

const AddRemoveBookBtn = ({
  as, id, onReadList, type, src, alt, availableBook,
}) => {
  const Component = as || 'button';
  let btnClass = '';
  let ariaLabel = '';
  const isButton = as === 'button';

  if (isButton) {
    btnClass = `btn add-btn ${onReadList
      ? 'add-btn--reserved'
      : 'add-btn--not-reserved'}`;
    ariaLabel = `${onReadList ? 'Remove' : 'Add'} book`;
  }

  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    const bookId = Number(e.target.id);
    let readingList = loadState();
    if (!onReadList) {
      dispatch(addBook(bookId));
      readingList = [...readingList, { bookId, priority: 1 }];
      readingList.sort((x, y) => y.priority - x.priority);
      saveState(readingList);
    }
    dispatch(setAnimated());
    setTimeout(() => {
      dispatch(resetAnimated());
    }, 500);
  };

  const handleRemoveBook = (e) => {
    const bookId = Number(e.target.id);
    dispatch(removeBook(bookId));
    let readingList = loadState();
    readingList = readingList.filter((item) => item.bookId !== bookId);
    saveState(readingList);
  };

  const dragStart = (e) => {
    if (availableBook) handleAddBook(e);
    else handleRemoveBook(e);
  };

  const handleClick = (e) => {
    if (onReadList) handleRemoveBook(e);
    else handleAddBook(e);
  };

  return (
    <Component
      type={type}
      id={id}
      aria-label={ariaLabel}
      className={btnClass}
      onClick={(e) => { if (isButton) handleClick(e); }}
      onDragStart={dragStart}
      draggable
      src={src}
      alt={alt}
    />
  );
};

AddRemoveBookBtn.defaultProps = {
  type: 'button',
  src: '',
  alt: '',
  availableBook: false,
};

AddRemoveBookBtn.propTypes = {
  as: PropTypes.elementType.isRequired,
  id: PropTypes.number.isRequired,
  onReadList: PropTypes.bool.isRequired,
  type: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  availableBook: PropTypes.bool,
};

export default AddRemoveBookBtn;
