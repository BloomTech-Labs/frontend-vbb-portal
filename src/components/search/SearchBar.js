import { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import { searchFilterFunction } from '../../redux/actions';
import { createModal } from '../../redux/actions';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';
import { useDebounce } from '../../hooks/useDebounce';

import '../../less/index.less';

const { Search } = Input;

const SearchBar = ({ createModal, searchFilterFunction, results }) => {
  const [toggle, setToggle] = useState(false);
  const [, setValue] = useDebounce(searchFilterFunction, '', {});

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
      ref={clickAwayRef}
      className="width-100 position-relative max-width-40rem"
    >
      <Search
        type="text"
        enterButton="Search"
        allowClear
        onChange={(e) => setValue(e.target.value)}
        onClick={() => setToggle(true)}
        onPressEnter={handlePressEnter}
      />
      {toggle && <SearchField results={results} setToggle={setToggle} />}
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
