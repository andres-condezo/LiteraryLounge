import { MdOutlineBookmarkAdd } from 'react-icons/md';
import { BiBookBookmark } from 'react-icons/bi';
import { FiFilter } from 'react-icons/fi';

const BookListHeader = () => (
  <div className="book-list-header">
    <h1>
      Books
      <span className="line"> / </span>
    </h1>
    <div className="counters">
      <FiFilter title="Filtered books" />
      20
      <BiBookBookmark title="Available books" />
      30
      <MdOutlineBookmarkAdd title="Books on reading list" />
      2
    </div>
  </div>
);

export default BookListHeader;
