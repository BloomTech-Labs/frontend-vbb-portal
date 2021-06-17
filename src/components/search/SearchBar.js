import { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import { searchUsers } from '../../mock-data/mockApi';
import { searchFilterFunction } from '../../redux/SearchBar.redux/SearchBar.reducer';
import { createModal } from '../../redux/actions';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';
import { useDebounce } from '../../hooks/useDebounce';

import '../../less/index.less';

const { Search } = Input;

const LIMIT = 50;

const search = (value) => {
  const parts = value.split(':').map((e) => e.trim());
  if (parts.length > 1) {
    return searchUsers(parts[1], {
      userTypes: [parts[0]],
      limit: LIMIT,
    });
  }
  return parts[0].length ? searchUsers(parts[0], { limit: LIMIT }) : {};
};

const SearchBar = ({ createModal }) => {
  const [toggle, setToggle] = useState(false);
  const [{ result }, setValue] = useDebounce(search, '', {});

  const clickAwayRef = useRef();

  const handleClickOutside = useCallback((event) => {
    if (!clickAwayRef.current?.contains(event.target)) {
      setToggle(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, [handleClickOutside]);

  const handlePressEnter = () => {
    const user = Object.values(result)?.[0]?.[0];
    if (user) {
      createModal(<StudentInfoModal user={user} />);
    }
  };

  return (
    <div className="flex justify-center">
      <div ref={clickAwayRef} className="width-80">
        <Search
          type="text"
          enterButton="Search"
          onChange={(e) => searchFilterFunction(e.target.value)}
          onClick={() => setToggle(true)}
          onPressEnter={handlePressEnter}
        />
        {toggle && <SearchField results={result} setToggle={setToggle} />}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    value: state.searchBarReducer.value,
    results: state.searchBarReducer.results,
  };
}

export default connect(mapStateToProps, { searchFilterFunction, createModal })(
  SearchBar
);
