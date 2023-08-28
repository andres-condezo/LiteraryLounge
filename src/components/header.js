import { useSelector } from 'react-redux';

const Header = () => {
  const isAnimated = useSelector((state) => state.listBtn.isAnimated);

  return (
    <header>
      <span>LibraryLounge</span>
      <nav>
        <button className={`btn ${isAnimated ? 'list-btn ' : ''}`} type="button">
          Reading List
        </button>
      </nav>
    </header>
  );
};

export default Header;
