import { useSelector } from 'react-redux';
import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { BiBookBookmark } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';

const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <section className="book-list">
      <div className="book-list-header">
        <h1>
          Books
          <span className="line"> / </span>
        </h1>
        <div className="counters">
          <FiFilter />
          30
          <BiBookBookmark />
          20
          <MdOutlineBookmarkAdd />
          2
        </div>
      </div>
      <div className="books-container">
        {
          books && books.map((book) => (
            <article key={book.id}>
              <picture>
                <img src={book.cover} alt={book.title} />
              </picture>
              <div className="card-info">
                <h4>{book.title}</h4>
                <p>{book.author.name}</p>
              </div>
              <button type="button" className="btn add-btn">Add to read</button>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default BookList;
