import { useState } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../redux/actions/searchFilter';

export const Header = ({ setFilter }) => {
  const [search, setSearch] = useState('');

  function handleSerach(e) {
    e.preventDefault();
    setFilter(search);
    setSearch('');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          Contacts App
        </a>

        <form
          className="form-inline ml-auto my-2 my-lg-0"
          onSubmit={handleSerach}
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </header>
  );
};

export default connect(null, { setFilter })(Header);
