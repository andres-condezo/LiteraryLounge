import PropTypes from 'prop-types';
import Modal from './modal';

const ModalBook = ({
  book: {
    cover, title, author, synopsis, year, pages, genre, ISBN,
  },
  modalState,
  setModalState,
}) => (
  <Modal modalState={modalState} setModalState={setModalState}>
    <picture>
      <img src={cover} alt={title} />
    </picture>
    <div className="modal__info">
      <h4>{title}</h4>
      <h5>{author.name}</h5>
      <p>
        Genre:&nbsp;
        {genre}
      </p>
      <p>
        Year:&nbsp;
        {year}
      </p>
      <p>
        Pages:&nbsp;
        {pages}
      </p>
      <p>
        ISBN:&nbsp;
        {ISBN}
      </p>
      <p className="modal__info--p">
        <b>Synopsis:&nbsp;</b>
        {synopsis}
      </p>
    </div>
  </Modal>
);

ModalBook.propTypes = {
  book: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    synopsis: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    ISBN: PropTypes.string.isRequired,
  }).isRequired,
  modalState: PropTypes.bool.isRequired,
  setModalState: PropTypes.func.isRequired,
};

export default ModalBook;
