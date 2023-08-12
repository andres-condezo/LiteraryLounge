import { useSelector } from 'react-redux';
// import { useEffect } from 'react';

const BookList = () => {
  // const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  // useEffect(() => {
  //   dispatch(getBooks(bookObject));
  // }, []);

  return (
    <section className="book-list">
      <h1>Books</h1>
      <ul>
        {
          books && books.map((book) => (
            <li key={book.id}>
              <picture>
                <img src={book.cover} alt={book.title} />
              </picture>
              <h4>{book.title}</h4>
              <p>{book.author.name}</p>
              <button type="button" className="btn add-btn">Add to Read</button>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default BookList;
