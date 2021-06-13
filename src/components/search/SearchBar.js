import { useState, useCallback, useRef, useEffect } from 'react';
import { Input } from 'antd';
import { connect } from 'react-redux';

import SearchField from './SearchField';
import { searchUsers } from '../../mock-data/mockApi';
import { createModal } from '../../redux/actions';
import StudentInfoModal from '../StudentInfo/StudentInfoModal';

const { Search } = Input;

const SearchBar = ({ createModal }) => {
  const [value, setValue] = useState({ name: '' });
  const [toggle, setToggle] = useState(false);
  const [results, setResults] = useState({});

  const clickAwayRef = useRef();

  useEffect(() => {
    searchUsers(value.name).then((data) => setResults(data));
  }, [value]);

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
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          onClick={() => setToggle(true)}
          onPressEnter={handlePressEnter}
        />
        {toggle && <SearchField results={results} setToggle={setToggle} />}
      </div>
    </div>
  );
};

export default connect(null, { createModal })(SearchBar);
