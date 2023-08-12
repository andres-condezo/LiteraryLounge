import BookList from './booksList';

const Main = () => (
  <main>
    <aside className="filters">
      Fiters
    </aside>
    <BookList />
    <aside className="reading-list">
      Reading List
    </aside>
  </main>
);

export default Main;
