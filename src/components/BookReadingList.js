import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import BookListCard from './bookListCard';
import { getReadingBooks } from '../logic/getFilters';
import '../css/reading-list.css';

const BookReadingList = () => {
  const [readingList, setReadingList] = useState([]);
  const bookList = useSelector((state) => state.books);

  useEffect(() => {
    setReadingList(getReadingBooks());
  }, [bookList]);

  const sortReadingList = () => {
    setReadingList(getReadingBooks());
  };

  const draggingOver = (e) => {
    e.preventDefault();
  };

  return (
    <aside className="aside__readinglist">
      <h3>READING LIST</h3>
      <div className="aside__readinglist-box" onDragOver={draggingOver}>
        {
          readingList && readingList.map((book) => (
            <BookListCard
              key={book.id}
              book={book}
              availableBook={false}
              sortReadingList={sortReadingList}
            />
          ))
        }
      </div>
    </aside>
  );
};

export default BookReadingList;
