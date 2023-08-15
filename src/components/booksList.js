import { useSelector } from 'react-redux';
import BookListHeader from './bookListHeder';
import BookListCard from './bookListCard';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <section className="book-list">
      <BookListHeader />
      <div className="books-container">
        {
          books && books.map((book) => (
            <BookListCard key={book.id} book={book} />
          ))
        }
      </div>
    </section>
  );
};

export default BookList;
