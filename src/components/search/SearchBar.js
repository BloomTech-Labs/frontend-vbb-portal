import { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import { searchUsers } from '../../mock-data/mockApi';
import { searchFilterFunction } from '../../redux/SearchBar.redux/SearchBar.reducer';
import { createModal } from '../../redux/actions';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';

const { Search } = Input;
const SearchBar = ({ createModal, value, results, searchFilterFunction }) => {
  const [toggle, setToggle] = useState(false);
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
    const user = Object.values(results)?.[0]?.[0];
    if (user) {
      createModal(<StudentInfoModal user={user} />);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div ref={clickAwayRef} style={{ width: '80%' }}>
        <Search
          type="text"
          enterButton="Search"
          onChange={(e) => searchFilterFunction(e.target.value)}
          onClick={() => setToggle(true)}
          onPressEnter={handlePressEnter}
        />
        {toggle && <SearchField results={results} setToggle={setToggle} />}
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
