import { useDispatch } from 'react-redux';
import { loadState, saveState } from '../logic/localStorage';
import { setAnimated, resetAnimated } from '../redux/listBtnSlice';
import { addBook, removeBook } from '../redux/booksSlice';

const useBook = (onReadList) => {
  const dispatch = useDispatch();

  const handleAddBook = (id) => {
    const bookId = Number(id);
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

  const handleRemoveBook = (id) => {
    const bookId = Number(id);
    dispatch(removeBook(bookId));
    let readingList = loadState();
    readingList = readingList.filter((item) => item.bookId !== bookId);
    saveState(readingList);
  };

  return { handleAddBook, handleRemoveBook };
};

export default useBook;
