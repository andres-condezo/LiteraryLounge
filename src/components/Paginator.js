import PropType from 'prop-types';
import '../css/paginator.css';

const Paginator = ({ numPages, activePage, paginatorHandler }) => {
  const onClickPageButton = (e) => {
    paginatorHandler(e.target.dataset.page);
  };

  return (
    <div className="books__pagination">
      <button
        type="button"
        data-page="1"
        className="btn__page"
        onClick={onClickPageButton}
      >
        &lt;
      </button>
      {[...Array(numPages).keys()].map((n) => (
        <button
          key={n + 1}
          type="button"
          data-page={n + 1}
          className={`btn__page ${
            n + 1 === activePage ? 'btn__page-active' : ''
          }`}
          onClick={onClickPageButton}
        >
          {n + 1}
        </button>
      ))}
      <button
        type="button"
        data-page={numPages}
        className="btn__page"
        onClick={onClickPageButton}
      >
        &gt;
      </button>
    </div>
  );
};

Paginator.propTypes = {
  numPages: PropType.number.isRequired,
  activePage: PropType.number.isRequired,
  paginatorHandler: PropType.func.isRequired,
};

export default Paginator;
