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
      <FiFilter />
      30
      <BiBookBookmark />
      20
      <MdOutlineBookmarkAdd />
      2
    </div>
  </div>
);

export default BookListHeader;
